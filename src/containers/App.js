import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";
import { setSearchField } from "../redux/actions";
import { searchRobots, requestRobots } from "../redux/reducers";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots,
    isPending: false,
    error: "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    requestRobots,
  };
};

function App(props) {
  const [robots, setRobots] = useState([]);
  const { onSearchChange, searchField } = props;
  const filteredRobots = () =>
    robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users), []);
  }, []);

  return !robots.length ? (
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
