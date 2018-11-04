import React from "react";
import PropTypes from "prop-types";
import * as images from "../../images/";

const ForecastEntry = ({ moment, temp, main, description }) => (
	<li className="forecast-entry">
		<span className="forecast-entry__time">{moment.format("kk:mm")}</span>
		<div className="forecast-entry__icon-wrapper">
			{images[main](
				`forecast-entry__icon forecast-entry__icon--${main.toLowerCase()}`,
				description
			)}
		</div>

		<span className="forecast-entry__temp">
			{Math.round(temp)}
			&deg;
		</span>
	</li>
);

ForecastEntry.propTypes = {
	moment: PropTypes.object.isRequired,
	temp: PropTypes.number.isRequired,
	main: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default ForecastEntry;
