import React from "react";
import PropTypes from "prop-types";
import ForecastDay from "../ForecastDay";

const Forecast = ({ forecast, city }) => (
	<div className="forecast">
		{/* <h1 className="forecast__location">
			{`${copy.resultsPrefix} "${city.name}"`}
		</h1> */}
		<ul className="forecast__days">
			{Object.values(forecast).map((dayData, i) => (
				<ForecastDay key={`forecast-day-${i}`} {...dayData} />
			))}
		</ul>
	</div>
);

Forecast.propTypes = {
	forecast: PropTypes.object.isRequired,
	city: PropTypes.object.isRequired
};

export default Forecast;
