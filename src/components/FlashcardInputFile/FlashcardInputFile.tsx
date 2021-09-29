import { useCallback, useRef, useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FlashcardInterface from "../../shared/flashcard.interface";
import * as flashcardTypes from "../../reducers/flashcard/Types";
import flashcardInputFile from "./FlashcardInputFile.module.css";

const FlashcardInputFile = () => {
  const flashcards = useSelector(
    (state: any) => state.flashcardProvider.flashcards
  );
  const dispatch = useDispatch();

  const inputFileRef = useRef<HTMLInputElement>(null);
  const [haveImportedFile, setHaveImportedFile] = useState(false);
  const [importedFile, setImportedFile] = useState<FileList>();

  const attemptToShowConfirmBtn = () => {
    const importedFile = inputFileRef.current?.files;
    if (importedFile && importedFile.length > 0) setHaveImportedFile(true);
  };

  const importFileFromFileSystem = () => {
    const files = inputFileRef.current?.files;
    if (files) {
      setImportedFile(files);
      fetchFlashcardsFromFile();
    }
  };

  const fetchFlashcardsFromFile = useCallback(() => {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      const res: string | undefined = reader.result?.toString().trim();
      if (typeof res === "string") {
        const fileContent = JSON.parse(res);
        if (fileContent.length > 0 && flashcards.length > 0) {
          dispatch({ type: flashcardTypes.REMOVE_ALL_FLASHCARDS, payload: {} });
        }
        if (fileContent.length > 0) {
          fileContent.forEach((flashcard: FlashcardInterface) => {
            const { id, front, back }: FlashcardInterface = flashcard;
            dispatch({
              type: flashcardTypes.ADD_FLASHCARD,
              payload: { id, front, back },
            });
          });
        }
      }
    };
    if (importedFile?.item) {
      const res: File | null = importedFile.item(0);
      if (res) {
        reader.readAsText(res);
        setHaveImportedFile(false);
      }
    }
  }, [dispatch, flashcards.length, importedFile]);

  const exportFlashcardsFromDeck = useCallback(() => {
    const dataStr = JSON.stringify(flashcards);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = "flashcards.json";
    const linkElement = document.createElement("a");

    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }, [flashcards]);

  return (
    <div className={flashcardInputFile.importExport}>
      <div className={flashcardInputFile.buttonWrap}>
        <input
          type="file"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={inputFileRef}
          onChange={attemptToShowConfirmBtn}
        />
      </div>
      {haveImportedFile && (
        <Button
          variant="outlined"
          color="secondary"
          className="confirm"
          onClick={importFileFromFileSystem}
        >
          Confirm
        </Button>
      )}
      {flashcards.length > 0 && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={exportFlashcardsFromDeck}
        >
          Export
        </Button>
      )}
    </div>
  );
};

export default FlashcardInputFile;
