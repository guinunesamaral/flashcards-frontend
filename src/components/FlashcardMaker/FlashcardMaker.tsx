import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import * as flashcardTypes from "../../reducers/flashcard/Types";
import "./FlashcardMaker.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
  })
);

const FlashcardMaker = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);
  const frontRef = useRef<HTMLInputElement>(null);
  const backRef = useRef<HTMLInputElement>(null);

  const makeNewFlashcard = useCallback(() => {
    const id = uuidv4();
    const front = frontRef.current?.value;
    const back = backRef.current?.value;
    dispatch({
      type: flashcardTypes.ADD_FLASHCARD,
      payload: { id, front, back },
    });
  }, [dispatch]);

  const attemptToShowBtn = () => {
    if (frontRef.current?.value && backRef.current?.value) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  return (
    <div className="flashcardMaker">
      <div className={classes.root}>
        <TextField
          id="filled-secondary-1"
          label="Front"
          variant="filled"
          color="secondary"
          fullWidth
          style={{ margin: 8 }}
          inputRef={frontRef}
          onChange={attemptToShowBtn}
        />
        <TextField
          id="filled-secondary-2"
          label="Back"
          variant="filled"
          color="secondary"
          fullWidth
          style={{ margin: 8 }}
          inputRef={backRef}
          onChange={attemptToShowBtn}
        />
        {showBtn ? (
          <Button
            variant="outlined"
            color="secondary"
            onClick={makeNewFlashcard}
            style={{ margin: "10px" }}
          >
            <Link
              to="/deck"
              style={{ color: "var(--pink-1)", textDecoration: "none" }}
            >
              Make Flashcard
            </Link>
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FlashcardMaker;
