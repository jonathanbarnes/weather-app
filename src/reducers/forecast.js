import * as actionTypes from "../config/actionTypes";
import { FETCH_STATUS } from "../config/constants";

export const initialState = {
	fetchStatus: FETCH_STATUS.IDLE,
	city: null,
	data: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FORECAST_SET_FETCH_STATUS:
			return {
				...state,
				fetchStatus: action.payload.status
			};

		case actionTypes.FORECAST_RECEIVE_FORECAST:
			return {
				...state,
				city: action.payload.city,
				data: action.payload.data
			};

		default:
			return state;
	}
};

export const getStatus = state => state.fetchStatus;
export const getCity = state => state.city;
export const getForecast = state => state.data;
