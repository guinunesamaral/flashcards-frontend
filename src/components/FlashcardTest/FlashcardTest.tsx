import { FormEvent, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import FlashcardQuestion from "../FlashcardQuestion/FlashcardQuestion";
import flashcardTest from "./FlashcardTest.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const FlashcardTest = () => {
  const classes = useStyles();
  const [rightCounter, setRightCounter] = useState(0);
  const [wrongCounter, setWrongCounter] = useState(0);
  const [message, setMessage] = useState("Show back");
  const flashcards = useSelector(
    (state: any) => state.flashcardReducer.flashcards
  );
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
    <div className={flashcardTest.study}>
      {flashcards.length > 0 ? (
        <>
          {endOfStudy ? (
            <div className={flashcardTest.score}>
              <p>
                Wrong: <span>{wrongCounter},</span>
              </p>
              <p>
                Right: <span>{rightCounter}</span>
              </p>
            </div>
          ) : (
            <div className={flashcardTest.box}>
              {message === "Show back" ? (
                <FlashcardQuestion {...flashcard} side="front" />
              ) : (
                <FlashcardQuestion {...flashcard} side="back" />
              )}
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  className={`flashcardTest.wrongBtn ${
                    message === "Show back"
                      ? flashcardTest.hidden
                      : flashcardTest.visible
                  }`}
                  value="wrong"
                  onClick={updateScore}
                >
                  Wrong
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  className="showBtn btn"
                  onClick={changeMessage}
                >
                  {message}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={`rightBtn ${
                    message === "Show back" ? "hidden" : "visible"
                  }`}
                  value="right"
                  onClick={updateScore}
                >
                  Right
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p className={classes.root}>Add some flashcards first</p>
      )}
    </div>
  );
};

export default FlashcardTest;
