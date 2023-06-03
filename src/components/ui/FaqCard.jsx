import React, { useState } from "react";
import arrow from "../../assets/Vectorarrowup.svg";

function FaqCard({ question, answer }) {
  const [load, setLoad] = useState(false);

  function dropDown() {
    if (load === false) {
      setLoad((prev) => !prev);
    } else {
      setLoad((prev) => !prev);
    }
  }

  return (
    <div className={load && "faq__dropdown"}>
      <div className="faq-card__wrapper">
        <div className="faq">
          <div className="faq__question">{question}</div>
          <button className="faq__btn" onClick={dropDown}>
            <img src={arrow} alt="" className="faq__arrow" />
          </button>
        </div>
        <div className="faq__divider" />
        <div className="faq__answer">{answer}</div>
      </div>
    </div>
  );
}

export default FaqCard;
