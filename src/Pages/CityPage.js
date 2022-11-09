import React from "react";
import { connect } from "react-redux";
import { setSelectedCity } from "../Redux/Main/MainActions";

const CityPage = (props) => {
  let tempRoute = window.location.pathname.substring(1);
  let arr = tempRoute.split("");
  arr.map((e, i) => {
    arr[0] = arr[0].toUpperCase();
    if (e === "-") arr[i + 1] = arr[i + 1].toUpperCase();
  });

  return (
    <div>
      <h1>{arr}</h1>
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
