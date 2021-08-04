import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import "./Flashcard.css";

function Flashcard({
  id,
  front,
  back,
}: {
  id: string;
  front: string;
  back: string;
}) {
  const { removeFlashcard } = useGlobalContext();
  const [side, setSide] = useState("front");

  const remove = () => {
    removeFlashcard(id);
  };

  const flip = () => {
    if (side === "front") setSide("back");
    else setSide("front");
  };

  return (
    <div className="flashcard">
      {side === "front" ? (
        <>
          <div className="front">
            <p className="frontText" onClick={flip}>
              {front}
            </p>
          </div>
          <div className="toolBar">
            <button className="removeFlashcardBtn" onClick={remove}></button>
          </div>
        </>
      ) : (
        <div className="back">
          <p className="backText" onClick={flip}>
            {back}
          </p>
        </div>
      )}
    </div>
  );
}

export default Flashcard;
