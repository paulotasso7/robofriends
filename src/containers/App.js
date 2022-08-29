import React, { useEffect } from "react";
import { connect } from "react-redux";

import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props) {
  const { onSearchChange, searchField, onRequestRobots, robots, isPending } =
    props;
  const filteredRobots = () =>
    robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robo Amigos</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <Cardlist robots={filteredRobots()} />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
