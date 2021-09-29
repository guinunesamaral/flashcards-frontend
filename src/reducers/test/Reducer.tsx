import * as testTypes from "./Types";

interface Score {
  easy: number;
  hard: number;
}

interface State {
  score: Score;
}

interface Action {
  type: string;
  payload: Object;
}

const initialState = {
  score: {
    easy: 0,
    hard: 0,
  },
};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case testTypes.ADD_EASY_SCORE:
      return {
        score: { ...state.score, easy: state.score.easy + 1 },
      };
    default:
      return state;
  }
};
