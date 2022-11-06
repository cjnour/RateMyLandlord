import { SET_CITIES } from "../Constants";

export const setCities = (cities) => {
  return {
    type: SET_CITIES,
    payload: cities,
  };
};
