import { SET_CITIES, SET_SELECTED_CITY } from "../Constants";
import initialState from "./InitialState";

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES: {
      return {
        ...state,
        cities: action.payload,
      };
    }
    case SET_SELECTED_CITY: {
      return {
        ...state,
        selectedCity: action.payload,
      };
    }
    default:
      return state;
  }
};
