import React from "react";
import { connect } from "react-redux";
import { setSelectedCity } from "../Redux/Main/MainActions";

const CityPage = (props) => {
  return (
    <div>
      <h1>{props.selectedCity}</h1>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCity: (e) => dispatch(setSelectedCity(e)),
  };
};

const mapStateToProps = (state) => {
  return {
    cities: state.MainReducer.cities,
    selectedCity: state.MainReducer.selectedCity,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPage);
