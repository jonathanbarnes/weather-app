import * as actionTypes from "../config/actionTypes";
import { FETCH_STATUS } from "../config/constants";

export const setForecastFetchStatus = (status, error = null) => ({
	type: actionTypes.FORECAST_SET_FETCH_STATUS,
	payload: {
		status,
		error
	}
});

export const receiveForecast = (city, data) => ({
	type: actionTypes.FORECAST_RECEIVE_FORECAST,
	payload: {
		city,
		data
	}
});

export const requestForecast = (city, countryCode = "GB") => async dispatch => {
	dispatch(setForecastFetchStatus(FETCH_STATUS.PENDING));

	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&mode=json`
		);
		const json = await response.json();

		dispatch(receiveForecast(city, json));
		return dispatch(setForecastFetchStatus(FETCH_STATUS.SUCCESS));
	} catch (error) {
		return dispatch(setForecastFetchStatus(FETCH_STATUS.FAILURE, error));
	}
};
