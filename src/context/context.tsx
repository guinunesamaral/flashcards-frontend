import React, { useContext, useReducer } from "react";
import reducer from "../reducer/reducer";

const AppContext = React.createContext<any>({});

const AppProvider = ({ children }: { children: any }) => {
  const initialState = {
    flashcards: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsSignedIn = (value: string) => {
    dispatch({ type: "SIGN_IN", payload: { value } });
  };

  const addFlashcard = (id: string, front: string, back: string) => {
    dispatch({ type: "ADD_FLASHCARD", payload: { id, front, back } });
  };

  const removeFlashcard = (id: string) => {
    dispatch({ type: "REMOVE_FLASHCARD", payload: id });
  };

  const removeAllFlashcards = () => {
    dispatch({ type: "REMOVE_ALL_FLASHCARDS", payload: {} });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setIsSignedIn,
        addFlashcard,
        removeFlashcard,
        removeAllFlashcards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
