import React from "react";
import { AnswerObject } from '../App'

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
  <div>
    <p className="number">
      Question: {question_number} / {total_questions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map(answer => (
        <div key={answer}>
          <button disabled={user_answers ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
