import {
  ChangeEvent,
  FC,
  FormEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { BtnFillAnimation, ButtonQuestion } from "@/components/Buttons";
import { useWordsState } from "../../wordsState/wordsState";
import { addHours } from "date-fns";
import { instance } from "@/api/config";
import { Loader } from "../Loader";
import {
  Form,
  InputsWrap,
  Label,
  Input,
  SubmitBtn,
  ErrorMessage,
  LoaderWrap,
  SuccessMessage,
  HeadIcon,
  QuestionWrap,
} from "./AddWordForm.styled";

interface SuccessfulWordAddI {
  word: string;
  translation: string;
}

export const AddWordForm: FC = () => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [successfulWordAdd, setSuccessfulWordAdd] =
    useState<null | SuccessfulWordAddI>(null);
  const [addWordLoading, setAddWordLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const { getWords, error } = useWordsState();

  useEffect(() => {
    if (word === "" || translation === "") return;

    setErrorMessage(error);
  }, [error]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setSuccessfulWordAdd(null);

    if (e.target.name === "word") {
      setWord(e.target.value);
    } else {
      setTranslation(e.target.value);
    }
  };

  const handleSubmitBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (word === "" && translation === "") {
      setErrorMessage("En word and Translation fields cannot be empty");
      return;
    } else if (word === "") {
      setErrorMessage("En word field cannot be empty");
      return;
    } else if (translation === "") {
      setErrorMessage("Translation field cannot be empty");
      return;
    }

    const wordData = {
      word: word.trim().toLowerCase(),
      translate: translation
        .split(/[,.]+/)
        .map(word => word.trim().toLowerCase())
        .filter(word => word !== ""),
      addedAt: new Date(),
      canByConfirmed: addHours(new Date(), 24),
    };

    try {
      setAddWordLoading(true);
      await instance.post(`words`, wordData);
      getWords();
      setSuccessfulWordAdd({
        word,
        translation,
      });
      setWord("");
      setTranslation("");
      setAddWordLoading(false);
    } catch (error: any) {
      const { message } = JSON.parse(error.request.response);
      setErrorMessage(message);
      setAddWordLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <QuestionWrap>
        <ButtonQuestion fnc={() => {}} id={"addWord"} />
      </QuestionWrap>

      <InputsWrap>
        <Label>
          En word
          <Input
            onChange={handleInput}
            name="word"
            type="text"
            placeholder="Vocabulary"
            value={word}
          />
        </Label>
        <Label>
          Translation
          <Input
            onChange={handleInput}
            name="translation"
            type="text"
            placeholder="Cловниковий запас"
            value={translation}
          />
        </Label>
      </InputsWrap>

      {addWordLoading && (
        <LoaderWrap>
          <Loader size={60} />
        </LoaderWrap>
      )}

      {successfulWordAdd && !addWordLoading && (
        <SuccessMessage>
          <span>{successfulWordAdd.word.trim().toLowerCase()} -</span>
          {successfulWordAdd.translation
            .split(/[,.]+/)
            .map(word => word.trim().toLowerCase())
            .filter(word => word !== "")
            .map((word, index, arr) => {
              return (
                <p key={index}>
                  {word}
                  {arr.length - 1 === index ? "." : ","}
                </p>
              );
            })}
          <HeadIcon />
        </SuccessMessage>
      )}

      {errorMessage && !addWordLoading && !successfulWordAdd && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}

      {!errorMessage && !addWordLoading && !successfulWordAdd && (
        <SubmitBtn
          onClick={handleSubmitBtn}
          className="submitBtn"
          type="submit"
        >
          Add word
          <BtnFillAnimation />
        </SubmitBtn>
      )}
    </Form>
  );
};
