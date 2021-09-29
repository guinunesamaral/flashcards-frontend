import * as flashcardTypes from "./Types";
import { flashcardDatabase } from "../../shared/flashcard.database";

const initialState = {
  flashcards: flashcardDatabase,
};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case flashcardTypes.ADD_FLASHCARD:
      return { flashcards: [...state.flashcards, action.payload] };
    case flashcardTypes.SET_FLASHCARDS:
      return {
        flashcards: action.payload.flashcards,
      };
    case flashcardTypes.REMOVE_FLASHCARD:
      return {
        flashcards: state.flashcards.filter(
          (flashcard: any) => flashcard.id !== action.payload.id
        ),
      };
    case flashcardTypes.REMOVE_ALL_FLASHCARDS:
      return {
        flashcards: [],
      };
    default:
      return state;
  }
};
