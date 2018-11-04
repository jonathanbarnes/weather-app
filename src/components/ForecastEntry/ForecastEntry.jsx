import React from "react";
import PropTypes from "prop-types";
import * as images from "../../images/";

const ForecastEntry = ({ moment, temp, main, description }) => (
	<li className="forecast-entry">
		<span className="forecast-entry__time">{moment.format("hA")}</span>
		<div className="forecast-entry__icon-wrapper">
			{images[main]("forecast-entry__icon", description)}
		</div>
		<span className="forecast-entry__temp">
			{Math.round(+temp)}
			&deg;C
		</span>
		<span className="forecast-entry__label">{main}</span>
	</li>
);

ForecastEntry.propTypes = {
	moment: PropTypes.object.isRequired,
	temp: PropTypes.number.isRequired,
	main: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default ForecastEntry;
