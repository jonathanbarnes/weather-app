import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/";
import ResultsContainer from "../ResultsContainer";
import "./App.css";

const App = () => (
	<div className="App">
		<SearchBar />
		<ResultsContainer />
	</div>
);

App.propTypes = {
	forecastFetchStatus: PropTypes.string.isRequired
};

export default App;
