import * as actionTypes from "../config/actionTypes";
import { FETCH_STATUS } from "../config/constants";
import constructEndpoint from "../utils/constructEndpoint";

export const setForecastFetchStatus = (status, error = null) => ({
	type: actionTypes.FORECAST_SET_FETCH_STATUS,
	payload: {
		status,
		error
	}
});

export const requestForecast = (city, countryCode) => ({
	type: actionTypes.FORECAST_REQUEST_FORECAST,
	payload: {
		city,
		countryCode
	}
});

export const receiveForecast = data => ({
	type: actionTypes.FORECAST_RECEIVE_FORECAST,
	payload: {
		data
	}
});

export const getForecast = (city, countryCode = "GB") => async dispatch => {
	dispatch(setForecastFetchStatus(FETCH_STATUS.PENDING));
	dispatch(requestForecast(city, countryCode));

	try {
		const response = await fetch(constructEndpoint(city, countryCode));
		const json = await response.json();

		dispatch(receiveForecast(json));

		return dispatch(setForecastFetchStatus(FETCH_STATUS.SUCCESS));
	} catch (error) {
		return dispatch(setForecastFetchStatus(FETCH_STATUS.FAILURE, error));
	}
};
