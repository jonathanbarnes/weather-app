import * as actionTypes from "../config/actionTypes";
import { FETCH_STATUS } from "../config/constants";

export const initialState = {
	fetchStatus: FETCH_STATUS.IDLE,
	data: null
};

export default (state = {}, action) => {
	switch (action.type) {
		case actionTypes.CITIES_SET_FETCH_STATUS:
			return {
				...state,
				fetchStatus: action.payload.status
			};

		case actionTypes.CITIES_RECEIVE_CITIES:
			return {
				...state,
				data: action.payload.data
			};

		default:
			return state;
	}
};

export const getStatus = state => state.fetchStatus;
export const getQuery = state => state.query;
export const getCities = state => state.data;
