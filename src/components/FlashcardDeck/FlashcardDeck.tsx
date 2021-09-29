import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Flashcard from "../Flashcard/Flashcard";
import FlashcardInterface from "../../shared/flashcard.interface";
import * as flashcardTypes from "../../reducers/flashcard/Types";
import "./FlashcardDeck.css";

const FlashcardDeck = React.memo(
  ({ flashcards }: { flashcards: Array<FlashcardInterface> }) => {
    const dispatch = useDispatch();
    const updateLocalStorageFlashcards = useCallback(() => {
      localStorage.setItem("flashcards", JSON.stringify(flashcards));
    }, [flashcards]);

    // useEffect(() => {
    //   const storedFlashcards = localStorage.getItem("flashcards");
    //   if (storedFlashcards) {
    //     const retrievedFlashcards = JSON.parse(storedFlashcards);
    //     dispatch({
    //       type: flashcardTypes.SET_FLASHCARDS,
    //       payload: retrievedFlashcards,
    //     });
    //   } else {
    //     updateLocalStorageFlashcards();
    //   }
    // }, [dispatch, flashcards, updateLocalStorageFlashcards]);

    return (
      <div className="deck">
        {flashcards &&
          flashcards.map((flashcard: FlashcardInterface) => {
            return <Flashcard key={flashcard.id} {...flashcard} />;
          })}
      </div>
    );
  }
);

export default FlashcardDeck;
