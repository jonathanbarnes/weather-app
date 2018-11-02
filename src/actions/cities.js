import * as actionTypes from "../config/actionTypes";

export const setCitiesFetchStatus = status => ({
	type: actionTypes.CITIES_SET_FETCH_STATUS,
	payload: {
		status
	}
});

export const receiveCities = data => ({
	type: actionTypes.CITIES_RECEIVE_CITIES,
	payload: {
		data
	}
});

// TODO ADD REQUEST AS THUNK
