import flashcardQuestion from "./FlashcardQuestion.module.css";

const FlashcardQuestion = ({
  front,
  back,
  side,
}: {
  front: string;
  back: string;
  side: string;
}) => {
  return (
    <div className={flashcardQuestion.studyFlashcard}>
      {side === "front" ? (
        <div className={flashcardQuestion.frontStudy}>
          <p>{front}</p>
        </div>
      ) : (
        <div className={flashcardQuestion.studyFlashcard}>
          <p>{back}</p>
        </div>
      )}
    </div>
  );
};

export default FlashcardQuestion;
