import React from "react";
import BasicFlashcard from "../../components/BasicFlashcard/BasicFlashcard";
import { useGlobalContext } from "../../context/context";
import "./Random.css";

function Random({ index }: { index: number }) {
  const { flashcards } = useGlobalContext();
  const flashcard = flashcards[index];

  return (
    <>
      {flashcards.length > 0 ? (
        <div className="randomFlashcard">
          <BasicFlashcard {...flashcard} />
        </div>
      ) : (
        <p className="empty">Add some flashcards first</p>
      )}
    </>
  );
}

export default Random;
