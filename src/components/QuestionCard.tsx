import React from "react";
import { AnswerObject } from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  user_answers: AnswerObject | undefined;
  question_number: number;
  total_questions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  user_answers,
  question_number,
  total_questions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {question_number} / {total_questions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map(answer => (
        <ButtonWrapper
          key={answer}
          correct={user_answers?.correct_answer == answer}
          userClicked={user_answers?.answer === answer}>
          <button disabled={user_answers ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
