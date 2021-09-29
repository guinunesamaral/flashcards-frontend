import { useSelector } from "react-redux";
import DrawnFlashcard from "../FlashcardDrawn/FlashcardDrawn";

const FlashcardDraw = ({ index }: { index: number }) => {
  const flashcards = useSelector(
    (state: any) => state.flashcardReducer.flashcards
  );
  const flashcard = flashcards[index];

  return (
    <>
      {flashcards.length > 0 ? (
        <div style={styles.randomFlashcard}>
          <DrawnFlashcard {...flashcard} />
        </div>
      ) : (
        <p style={styles.empty}>Add some flashcards first</p>
      )}
    </>
  );
};

const styles = {
  randomFlashcard: {
    display: "flex",
    justifyContent: "center",
    marginTop: "90px",
  },
  empty: {
    color: "var(--white-1)",
    display: "flex",
    justifyContent: "center",
    marginTop: "90px",
  },
};

export default FlashcardDraw;
