import Component from "./Forecast";
import ForecastDay from "../ForecastDay";

let props;
let mounted;
const wrapper = options => {
	if (!mounted) mounted = shallow(<Component {...props} />, options);
	return mounted;
};

beforeEach(() => {
	mounted = undefined;
	props = {
		forecast: {},
		city: {}
	};
});

describe("<Forecast> component", () => {
	test("renders in DOM", () => {
		expect(wrapper().exists()).toBe(true);
	});
});
