import { useState } from "react";
import css from "./MyAccordion.module.css";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={css.my_accordion}>
      <div className={css.my_accordion_question} onClick={() => setShow(!show)}>
        <div className={css.plus}>{show ? "➖" : "➕"}</div>
        <h4 className={css.question}>{question}</h4>
      </div>
      <div className={css.my_accordion_answer}>
        {show && <p className={css.answer}>{answer}</p>}
      </div>
    </div>
  );
};

export default MyAccordion;
