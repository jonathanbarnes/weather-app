import Component from "./ForecastDay";

let props;
let mounted;
const wrapper = options => {
	if (!mounted) mounted = shallow(<Component {...props} />, options);
	return mounted;
};

beforeEach(() => {
	mounted = undefined;
	props = {
		dayOfWeek: "MOCK_DAY",
		minTemp: 10,
		maxTemp: 20,
		humidity: 100,
		entries: []
	};
});

describe("<ForecastDay> component", () => {
	test("renders in DOM", () => {
		expect(wrapper().exists()).toBe(true);
	});
});
