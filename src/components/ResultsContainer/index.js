import Component from "./ResultsContainer";
import { connect } from "react-redux";
import { getForecast } from "../../actions/forecast";
import "./ResultsContainer.css";

const mapStateToProps = state => ({
	...state.forecast
});

const mapDispatchToProps = {
	getForecast
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);
