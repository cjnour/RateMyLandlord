import { SET_CITIES } from "../Constants";
import initialState from "./InitialState";

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES: {
      return {
        ...state,
        cities: action.payload,
      };
    }
    default:
      return state;
  }
};
