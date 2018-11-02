import Component from "./SearchBar";
import { connect } from "react-redux";
import { getForecast } from "../../actions/forecast";

const mapDispatchToProps = {
	getForecast
};

export default connect(
	null,
	mapDispatchToProps
)(Component);
