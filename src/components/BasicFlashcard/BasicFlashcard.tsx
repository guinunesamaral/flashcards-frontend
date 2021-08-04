import React, { useState } from "react";
import "../Flashcard/Flashcard.css";

function BasicFlashcard({
  id,
  front,
  back,
}: {
  id: string;
  front: string;
  back: string;
}) {
  const [side, setSide] = useState("front");

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

export default BasicFlashcard;
