import { SET_CITIES, SET_SELECTED_CITY } from "../Constants";

export const setCities = (cities) => {
  return {
    type: SET_CITIES,
    payload: cities,
  };
};

export const setSelectedCity = (selectedCity) => {
  return {
    type: SET_SELECTED_CITY,
    payload: selectedCity,
  };
};
