import Component from "./App";
import { connect } from "react-redux";
import { requestForecast } from "../../actions/forecast";

const mapStateToProps = state => ({
	forecastFetchStatus: state.forecast.fetchStatus
});

const mapDispatchToProps = {
	requestForecast
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);
