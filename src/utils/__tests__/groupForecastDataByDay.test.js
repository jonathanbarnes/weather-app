import { sortData, groupForecastDataByDay } from "../groupForecastDataByDay";

const MOCK_DATA = new Array(10).fill({
	dt: 10000000,
	main: {
		temp: 10,
		humidity: 100
	},
	weather: [{}]
});

describe("exported named func : sortData", () => {
	test("returns expected value", () => {
		const value = sortData(MOCK_DATA);

		Object.values(value).forEach(dayData => {
			expect(dayData.dayOfWeek).toEqual(expect.any(String));

			expect(dayData.entries).toContainEqual({
				moment: expect.any(Object),
				temp: MOCK_DATA[0].main.temp,
				humidity: MOCK_DATA[0].main.humidity
			});
		});
	});
});

describe("exported named func : groupForecastDataByDay", () => {
	test("returns expected value", () => {
		const value = groupForecastDataByDay(MOCK_DATA);

		Object.values(value).forEach(dayData => {
			expect(dayData).toHaveProperty("minTemp");
			expect(dayData).toHaveProperty("maxTemp");
			expect(dayData).toHaveProperty("humidity");
		});
	});
});
