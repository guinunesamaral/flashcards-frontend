const reducer = (state: any, action: any) => {
  if (action.type === "ADD_FLASHCARD") {
    return { flashcards: [...state.flashcards, action.payload] };
  }
  if (action.type === "REMOVE_FLASHCARD") {
    return {
      flashcards: state.flashcards.filter(
        (flashcard: any) => flashcard.id !== action.payload
      ),
    };
  }
  if (action.type === "REMOVE_ALL_FLASHCARDS") {
    return {
      flashcards: [],
    };
  }
};

export default reducer;
