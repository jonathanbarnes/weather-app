import * as actionCreators from "../../actions/forecast";
import reducer, {
	initialState,
	getForecastDataByDay as selector
} from "../forecast";
import utilFunc from "../../utils/groupForecastDataByDay";

jest.mock("../../utils/groupForecastDataByDay");

describe("forecast reducer", () => {
	test("returns initialState", () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	test("sets the fetch status", () => {
		const action = actionCreators.setForecastFetchStatus("MOCK_STATUS");

		expect(reducer(undefined, action)).toHaveProperty(
			"fetchStatus",
			"MOCK_STATUS"
		);
	});

	test("sets forecast query", () => {
		const action = actionCreators.requestForecast("MOCK_CITY");

		expect(reducer(undefined, action)).toHaveProperty("query", {
			city: "MOCK_CITY"
		});
	});

	test("receives forecast data", () => {
		const MOCK_DATA = {
			MOCK_PROP: "MOCK_VALUE"
		};

		const action = actionCreators.receiveForecast(MOCK_DATA);

		expect(reducer(undefined, action)).toHaveProperty("data", MOCK_DATA);
	});
});

describe("selector : getForecastDataByDay", () => {
	test("calls utility function", () => {
		const MOCK_DATA = {
			data: {
				list: []
			}
		};

		selector(MOCK_DATA);

		expect(utilFunc).toHaveBeenCalledWith(MOCK_DATA.data.list);
	});
});
