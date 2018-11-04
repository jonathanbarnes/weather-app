import React from "react";
import PropTypes from "prop-types";
import { FETCH_STATUS } from "../../config/constants";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Forecast from "../Forecast";
import { loading } from "../../images/";

const ResultsContainer = ({ fetchStatus, query }) => {
	console.log(query);
	return fetchStatus !== FETCH_STATUS.IDLE ? (
		<TransitionGroup className="results-container">
			<CSSTransition
				key={fetchStatus}
				appear
				timeout={{ enter: 1000, exit: 500, appear: 500 }}
				classNames="transition-"
			>
				{
					{
						[FETCH_STATUS.PENDING]: (
							<div className="results-container__loading-container">
								<div className="results-container__loading-wrapper">
									{loading("results-container__loading")}
								</div>
							</div>
						),
						[FETCH_STATUS.SUCCESS]: <Forecast />,
						[FETCH_STATUS.FAILURE]: (
							<h2 className="results-container__no-results-message">
								No results for {query.city}{" "}
							</h2>
						)
					}[fetchStatus]
				}
			</CSSTransition>
		</TransitionGroup>
	) : null;
};

ResultsContainer.propTypes = {
	fetchStatus: PropTypes.oneOf(Object.values(FETCH_STATUS)).isRequired
};

export default ResultsContainer;
