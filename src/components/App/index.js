import Component from "./App";
import { connect } from "react-redux";
import { getForecast } from "../../actions/forecast";

const mapStateToProps = state => ({
	forecastFetchStatus: state.forecast.fetchStatus
});

const mapDispatchToProps = {
	getForecast
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);
