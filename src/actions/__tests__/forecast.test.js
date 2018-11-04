import * as actionCreators from "../forecast";
import * as actionTypes from "../../config/actionTypes";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { FETCH_STATUS } from "../../config/constants";

describe("setForecastFetchStatus action creator", () => {
	test("returns expected action", () => {
		const MOCK_STATUS = "MOCK_STATUS";

		const action = actionCreators.setForecastFetchStatus(MOCK_STATUS);

		expect(action).toEqual({
			type: actionTypes.FORECAST_SET_FETCH_STATUS,
			payload: {
				status: MOCK_STATUS,
				error: null
			}
		});
	});

	test("returns expected action with error", () => {
		const MOCK_STATUS = "MOCK_STATUS";
		const MOCK_ERROR = new Error("MOCK_MESSAGE");

		const action = actionCreators.setForecastFetchStatus(
			MOCK_STATUS,
			MOCK_ERROR
		);

		expect(action).toEqual({
			type: actionTypes.FORECAST_SET_FETCH_STATUS,
			payload: {
				status: MOCK_STATUS,
				error: MOCK_ERROR
			}
		});
	});
});

describe("requestForecast action creator", () => {
	test("returns expected action", () => {
		const MOCK_CITY = "MOCK_CITY";
		const MOCK_COUNTRY_CODE = "MOCK_COUNTRY_CODE";

		const action = actionCreators.requestForecast(
			MOCK_CITY,
			MOCK_COUNTRY_CODE
		);

		expect(action).toEqual({
			type: actionTypes.FORECAST_REQUEST_FORECAST,
			payload: {
				city: MOCK_CITY,
				countryCode: MOCK_COUNTRY_CODE
			}
		});
	});
});

describe("receiveForecast action creator", () => {
	test("returns expected action", () => {
		const MOCK_DATA = [];

		const action = actionCreators.receiveForecast(MOCK_DATA);

		expect(action).toEqual({
			type: actionTypes.FORECAST_RECEIVE_FORECAST,
			payload: {
				data: MOCK_DATA
			}
		});
	});
});

describe("getForecast action creator", () => {
	let mockStore;

	beforeAll(() => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				status: 200,
				json: () => Promise.resolve({})
			})
		);
	});

	beforeEach(() => {
		mockStore = configureMockStore([thunk])({});
		window.fetch.mockClear();
	});

	test("calls window fetch with arguments", async () => {
		const MOCK_CITY = "MOCK_CITY";
		const MOCK_COUNTRY_CODE = "MOCK_COUNTRY_CODE";

		await mockStore.dispatch(
			actionCreators.getForecast(MOCK_CITY, MOCK_COUNTRY_CODE)
		);

		expect(window.fetch).toHaveBeenCalledWith(
			expect.stringContaining(MOCK_CITY)
		);
	});

	describe("when endpoint fetch is successful", () => {
		test("correct actions are dispatched", async () => {
			const MOCK_CITY = "MOCK_CITY";
			const MOCK_COUNTRY_CODE = "MOCK_COUNTRY_CODE";

			await mockStore.dispatch(
				actionCreators.getForecast(MOCK_CITY, MOCK_COUNTRY_CODE)
			);

			expect(mockStore.getActions()).toEqual([
				actionCreators.setForecastFetchStatus(FETCH_STATUS.PENDING),
				actionCreators.requestForecast(MOCK_CITY, MOCK_COUNTRY_CODE),
				actionCreators.receiveForecast({}),
				actionCreators.setForecastFetchStatus(FETCH_STATUS.SUCCESS)
			]);
		});
	});

	describe("when endpoint fetch is not successful", () => {
		beforeAll(() => {
			window.fetch = jest.fn().mockImplementation(() =>
				Promise.resolve({
					status: 500,
					statusText: "MOCK_ERROR",
					json: () => Promise.resolve({})
				})
			);
		});

		beforeEach(() => {
			window.fetch.mockClear();
		});

		test("correct actions are dispatched", async () => {
			const MOCK_CITY = "MOCK_CITY";
			const MOCK_COUNTRY_CODE = "MOCK_COUNTRY_CODE";

			await mockStore.dispatch(
				actionCreators.getForecast(MOCK_CITY, MOCK_COUNTRY_CODE)
			);

			expect(mockStore.getActions()).toEqual([
				actionCreators.setForecastFetchStatus(FETCH_STATUS.PENDING),
				actionCreators.requestForecast(MOCK_CITY, MOCK_COUNTRY_CODE),
				actionCreators.setForecastFetchStatus(
					FETCH_STATUS.FAILURE,
					"MOCK_ERROR"
				)
			]);
		});
	});

	describe("when endpoint fetch throws", () => {
		test("correct actions are dispatched", async () => {
			const MOCK_ERROR = new Error("MOCK_ERROR");

			window.fetch = jest
				.fn()
				.mockImplementation(() => Promise.reject(MOCK_ERROR));

			const MOCK_CITY = "MOCK_CITY";
			const MOCK_COUNTRY_CODE = "MOCK_COUNTRY_CODE";

			await mockStore.dispatch(
				actionCreators.getForecast(MOCK_CITY, MOCK_COUNTRY_CODE)
			);

			expect(mockStore.getActions()).toEqual([
				actionCreators.setForecastFetchStatus(FETCH_STATUS.PENDING),
				actionCreators.requestForecast(MOCK_CITY, MOCK_COUNTRY_CODE),
				actionCreators.setForecastFetchStatus(
					FETCH_STATUS.FAILURE,
					MOCK_ERROR.message
				)
			]);
		});
	});
});
