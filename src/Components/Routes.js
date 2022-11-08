import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
// import { setRoute } from "../Redux/Main/MainActions";
import CityPage from "../Pages/CityPage";
import Cities from "../Pages/Cities";

const AnimatedRoutes = (props) => {
  const location = useLocation();

  //   useEffect(() => {
  //     props.setRoute(location.pathname.substring(1));
  //   }, [location.pathname, props]);

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

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedRoutes);
