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
import { AddWordModal } from "../Modals";
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
  const [modalOpen, setModalOpen] = useState(false);

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

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="form">
        <QuestionWrap>
          <ButtonQuestion fnc={() => setModalOpen(true)} id={"addWord"} />
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
            <HeadIcon />
            <p>
              {successfulWordAdd.word.trim().toLowerCase()} -{" "}
              <span>
                {successfulWordAdd.translation
                  .split(/[,.]+/)
                  .map(
                    word => word.trim().charAt(0).toUpperCase() + word.slice(1)
                  )
                  .filter(word => word !== "")
                  .map((word, index, arr) => {
                    return `${word}${arr.length - 1 === index ? "." : ", "}`;
                  })}
              </span>
            </p>

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

      <AddWordModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};
