import React from "react";
import SearchBar from "../SearchBar/";
import ResultsContainer from "../ResultsContainer";
import "./App.css";

const App = () => (
	<div className="weather-app">
		<SearchBar />
		<ResultsContainer />
	</div>
);

App.propTypes = {};

export default App;
