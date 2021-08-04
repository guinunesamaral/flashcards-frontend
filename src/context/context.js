"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useGlobalContext = void 0;
var react_1 = __importStar(require("react"));
var reducer_1 = __importDefault(require("../reducer/reducer"));
var AppContext = react_1["default"].createContext({});
var initialState = {
    flashcards: []
};
var AppProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useReducer(reducer_1["default"], initialState), state = _b[0], dispatch = _b[1];
    var setIsSignedIn = function (value) {
        dispatch({ type: "SIGN_IN", payload: { value: value } });
    };
    var addFlashcard = function (id, front, back) {
        dispatch({ type: "ADD_FLASHCARD", payload: { id: id, front: front, back: back } });
    };
    var removeFlashcard = function (id) {
        dispatch({ type: "REMOVE_FLASHCARD", payload: id });
    };
    var removeAllFlashcards = function () {
        dispatch({ type: "REMOVE_ALL_FLASHCARDS", payload: {} });
    };
    return (react_1["default"].createElement(AppContext.Provider, { value: __assign(__assign({}, state), { setIsSignedIn: setIsSignedIn,
            addFlashcard: addFlashcard,
            removeFlashcard: removeFlashcard,
            removeAllFlashcards: removeAllFlashcards }) }, children));
};
var useGlobalContext = function () {
    return react_1.useContext(AppContext);
};
exports.useGlobalContext = useGlobalContext;
exports["default"] = AppProvider;
