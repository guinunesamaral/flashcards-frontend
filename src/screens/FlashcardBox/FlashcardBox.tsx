import React, { useEffect, useState } from "react";
import Flashcard from "../../components/Flashcard/Flashcard";
import { useGlobalContext } from "../../context/context";
import "./FlashcardBox.css";

function FlashcardBox() {
  const { flashcards } = useGlobalContext();
  const { addFlashcard } = useGlobalContext();
  const { removeAllFlashcards } = useGlobalContext();
  const [hasImportedFile, setHasImportedFile] = useState(false);

  useEffect(() => {
    const saveFlashcardsOnLocalStorage = () => {
      localStorage.setItem("flashcards", flashcards);
    };

    window.onclose = () => saveFlashcardsOnLocalStorage;
  }, [flashcards]);

  const tryToShowConfirmButton = () => {
    const importedFile = (document.getElementById("import") as HTMLInputElement)
      .files;
    if (importedFile && importedFile.length > 0) setHasImportedFile(true);
  };

  interface FlashcardInterface {
    id: string;
    front: string;
    back: string;
  }

  const importFlashcards = () => {
    const importedFile = (document.getElementById("import") as HTMLInputElement)
      .files;
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      const res: string | undefined = reader.result?.toString().trim();
      if (typeof res === "string") {
        let fileContent = JSON.parse(res);
        if (fileContent.length > 0 && flashcards.length > 0) {
          removeAllFlashcards();
        }
        if (fileContent.length > 0) {
          fileContent.forEach((flashcard: FlashcardInterface) => {
            const { id, front, back }: FlashcardInterface = flashcard;
            addFlashcard(id, front, back);
          });
        }
      }
    };
    if (importedFile?.item) {
      const res: File | null = importedFile.item(0);
      if (res) {
        reader.readAsText(res);
        setHasImportedFile(false);
      }
    }
  };

  const exportFlashcards = () => {
    const dataStr = JSON.stringify(flashcards);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = "flashcards.json";
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <>
      <div className="importExport">
        <div className="button-wrap">
          <label className="button" htmlFor="import">
            Import
          </label>
          <input
            id="import"
            type="file"
            className="import"
            onChange={tryToShowConfirmButton}
          ></input>
        </div>
        {hasImportedFile && (
          <button className="confirm" onClick={importFlashcards}>
            Confirm
          </button>
        )}
        {flashcards.length > 0 && (
          <button className="export btn" onClick={exportFlashcards}>
            Export
          </button>
        )}
      </div>
      <div className="flashcardBox">
        {flashcards.map((flashcard: FlashcardInterface) => {
          return <Flashcard key={flashcard.id} {...flashcard} />;
        })}
      </div>
    </>
  );
}

export default FlashcardBox;
