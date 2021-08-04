import React, { FormEvent, useEffect, useState } from "react";
import StudyFlashcard from "../../components/StudyFlashcard/StudyFlashcard";
import { useGlobalContext } from "../../context/context";
import "./Study.css";

function Study() {
  const [rightCounter, setRightCounter] = useState(0);
  const [wrongCounter, setWrongCounter] = useState(0);
  const [message, setMessage] = useState("Show back");
  const { flashcards } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [endOfStudy, setEndOfStudy] = useState(false);
  const [flashcard, setFlashcard] = useState(flashcards[index]);

  const changeMessage = () => {
    if (message === "Show back") {
      setMessage("Show front");
    } else setMessage("Show back");
  };

  const nextFlashcard = () => {
    if (flashcards.length > 0) {
      if (index === flashcards.length - 1) {
        setIndex(0);
        setEndOfStudy(true);
      } else {
        setIndex(index + 1);
      }
      changeMessage();
    }
  };

  useEffect(() => {
    setFlashcard(flashcards[index]);
  }, [flashcards, index]);

  const updateScore = (e: FormEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === "wrong") setWrongCounter(wrongCounter + 1);
    else setRightCounter(rightCounter + 1);
    nextFlashcard();
  };

  return (
    <div className="study">
      {flashcards.length > 0 ? (
        <>
          {endOfStudy ? (
            <div className="score">
              <p className="wrong">
                Wrong: <span>{wrongCounter},</span>
              </p>
              <p className="right">
                Right: <span>{rightCounter}</span>
              </p>
            </div>
          ) : (
            <div className="box">
              {message === "Show back" ? (
                <StudyFlashcard {...flashcard} side="front" />
              ) : (
                <StudyFlashcard {...flashcard} side="back" />
              )}
              <div className="buttons">
                <button
                  className={`wrongBtn ${
                    message === "Show back" ? "hidden" : "visible"
                  }`}
                  value="wrong"
                  onClick={updateScore}
                >
                  Wrong
                </button>
                <button className="showBtn btn" onClick={changeMessage}>
                  {message}
                </button>
                <button
                  className={`rightBtn ${
                    message === "Show back" ? "hidden" : "visible"
                  }`}
                  value="right"
                  onClick={updateScore}
                >
                  Right
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="advice">Add some flashcards first</p>
      )}
    </div>
  );
}

export default Study;
