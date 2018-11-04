import React from "react";
import PropTypes from "prop-types";
import ForecastEntry from "../ForecastEntry";

const ForecastDay = ({ dayOfWeek, minTemp, maxTemp, humidity, entries }) => (
	<li className="forecast-day">
		<h1 className="forecast-day__day-of-week">{dayOfWeek}</h1>

		<div className="forecast-day__details">
			<span className="forecast-day__temp">
				{Math.round(minTemp)}
				&deg;&nbsp;/&nbsp;
				{Math.round(maxTemp)}
				&deg;
			</span>
			<span className="forecast-day__humidity">
				humidity: {Math.round(humidity)}
			</span>
		</div>

		<ul className="forecast-day__entries">
			{entries.map((entry, i) => (
				<ForecastEntry key={`${entry.id}-${i}`} {...entry} />
			))}
		</ul>
	</li>
);

ForecastDay.propTypes = {
	dayOfWeek: PropTypes.string.isRequired,
	minTemp: PropTypes.number.isRequired,
	maxTemp: PropTypes.number.isRequired,
	humidity: PropTypes.number.isRequired,
	entries: PropTypes.array.isRequired
};

export default ForecastDay;
