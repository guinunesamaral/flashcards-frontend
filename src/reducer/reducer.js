"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var reducer = function (state, action) {
    if (action.type === "ADD_FLASHCARD") {
        return { flashcards: __spreadArray(__spreadArray([], state.flashcards), [action.payload]) };
    }
    if (action.type === "REMOVE_FLASHCARD") {
        return {
            flashcards: state.flashcards.filter(function (flashcard) { return flashcard.id !== action.payload; })
        };
    }
    if (action.type === "REMOVE_ALL_FLASHCARDS") {
        return {
            flashcards: []
        };
    }
};
exports["default"] = reducer;
