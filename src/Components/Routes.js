import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import CityPage from "../Pages/CityPage";
import Cities from "../Pages/Cities";

const Routes = (props) => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/">
        <Cities />
      </Route>
      <Route path={`/${props.selectedCity}`}>
        <CityPage />
      </Route>
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setRoute: (route) => dispatch(setRoute(route)),
  };
};

const mapStateToProps = (state) => {
  return {
    selectedCity: state.MainReducer.selectedCity,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
