import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
	componentDidMount() {
		const { requestForecast } = this.props;

		setTimeout(() => {
			requestForecast("LONDON");
		}, 5000);
	}

	render() {
		const { forecastFetchStatus } = this.props;
		return (
			<div className="App">
				<h1>{forecastFetchStatus}</h1>
			</div>
		);
	}
}

App.propTypes = {
	forecastFetchStatus: PropTypes.string.isRequired
};

export default App;
