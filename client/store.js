import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from "redux-thunk";

import axios from "axios";

const SET_RED = "SET_RED";
const SET_BLUE = "SET_BLUE";
const SET_GREEN = "SET_GREEN";
const SAVE_COLOR = "SAVE_COLOR";

export const setColorActionCreator = (whichColor, value) => {
  if (whichColor === "red") {
    return {
      type: SET_RED, newRed: value
    };
  } else if (whichColor === "blue") {
    return {
      type: SET_BLUE, newBlue: value
    };
  } else if (whichColor === "green") {
    return {
      type: SET_GREEN, newGreen: value
    };
  }
};

export const saveColor = (color) => {
  return {
    type: SAVE_COLOR,
    color: color
  };
};

export const saveColorToServer = (colorToSave) => {
  return async (dispatch) => {
    await axios.post("/data/new-color", {
      red: colorToSave[0],
      green: colorToSave[1],
      blue: colorToSave[2]
    });
    dispatch(saveColor(colorToSave));
  };
};

const reducer = (currentState = { currentColor: ["255", "255", "255"], savedColors: [] }, action) => {
  switch (action.type) {
    case SET_RED:
      return {
        ...currentState,
        currentColor: [action.newRed, currentState.currentColor[1], currentState.currentColor[2]]
      };
    case SET_GREEN:
      return {
        ...currentState,
        currentColor: [currentState.currentColor[0], action.newGreen, currentState.currentColor[2]]
      };
    case SET_BLUE:
      return {
        ...currentState,
        currentColor: [currentState.currentColor[0], currentState.currentColor[1], action.newBlue]
      };
    case SAVE_COLOR:
      return {
        savedColors: [...currentState.savedColors, action.color],
        currentColor: ["255", "255", "255"],
      };
    default:
      return currentState;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

export default store;
