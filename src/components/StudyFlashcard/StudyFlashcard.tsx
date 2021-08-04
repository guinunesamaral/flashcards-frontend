import React from "react";
import "./StudyFlashcard.css";

function StudyFlashcard({
  front,
  back,
  side,
}: {
  front: string;
  back: string;
  side: string;
}) {
  return (
    <div
      className="studyFlashcard"
      style={
        side === "front"
          ? { backgroundColor: "var(--grey-1)" }
          : { backgroundColor: "var(--black-1)" }
      }
    >
      {side === "front" ? (
        <div className="frontStudy">
          <p className="frontText">{front}</p>
        </div>
      ) : (
        <div className="backStudy">
          <p className="backText">{back}</p>
        </div>
      )}
    </div>
  );
}

export default StudyFlashcard;
