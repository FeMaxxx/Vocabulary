import { ChangeEvent, FC, FormEvent, useState } from "react";
import { BtnFillAnimation } from "@/components/Buttons";
import { useWordsState } from "../../wordsState/wordsState";
import { addHours } from "date-fns";
import {
  Form,
  InputsWrap,
  Label,
  Input,
  SubmitBtn,
} from "./AddWordForm.styled";

export const AddWordForm: FC = () => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  const { addWord, loading } = useWordsState();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "word") {
      setWord(e.target.value);
    } else {
      setTranslation(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addWord({
      word: word.trim().toLowerCase(),
      translate: translation
        .split(/[,.]+/)
        .map(word => word.trim().toLowerCase()),
      addedAt: new Date(),
      canByConfirmed: addHours(new Date(), 24),
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
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

      <SubmitBtn className="submitBtn" type="submit">
        Add word
        <BtnFillAnimation />
      </SubmitBtn>
    </Form>
  );
};
