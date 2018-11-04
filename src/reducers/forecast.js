import * as actionTypes from "../config/actionTypes";
import { FETCH_STATUS } from "../config/constants";
import groupForecastDataByDay from "../utils/groupForecastDataByDay";

export const initialState = {
	fetchStatus: FETCH_STATUS.IDLE,
	query: null,
	data: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FORECAST_SET_FETCH_STATUS:
			return {
				...state,
				fetchStatus: action.payload.status
			};

		case actionTypes.FORECAST_REQUEST_FORECAST:
			return {
				...state,
				query: {
					...action.payload
				}
			};

		case actionTypes.FORECAST_RECEIVE_FORECAST:
			return {
				...state,
				data: action.payload.data
			};

		default:
			return state;
	}
};

export const getForecastDataByDay = state =>
	groupForecastDataByDay(state.data.list);
