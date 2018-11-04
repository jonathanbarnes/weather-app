import Component from "./Forecast";
import { connect } from "react-redux";
import { getForecastDataByDay } from "../../reducers/forecast";

const mapStateToProps = state => ({
	forecast: getForecastDataByDay(state.forecast),
	city: state.forecast.data.city
});

export default connect(mapStateToProps)(Component);
