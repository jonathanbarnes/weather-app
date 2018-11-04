import React from "react";
import PropTypes from "prop-types";
import ForecastEntry from "../ForecastEntry";

const ForecastDay = ({ dayOfWeek, minTemp, maxTemp, humidity, entries }) => (
	<li>
		<h1>{dayOfWeek}</h1>
		<span>{Math.round(humidity)}</span>
		<span>
			{Math.round(minTemp)}
			&deg;C
		</span>
		<span>
			{Math.round(maxTemp)}
			&deg;C
		</span>
		<ul>
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
