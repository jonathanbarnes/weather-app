import Component from "./ForecastEntry";

jest.mock("../../images");

let props;
let mounted;
const wrapper = options => {
	if (!mounted) mounted = shallow(<Component {...props} />, options);
	return mounted;
};

beforeEach(() => {
	mounted = undefined;
	props = {
		moment: {
			format: jest.fn()
		},
		temp: 10,
		main: "MOCK_MAIN",
		description: "MOCK_DESCRIPTION"
	};
});

describe("<ForecastEntry> component", () => {
	test("renders in DOM", () => {
		expect(wrapper().exists()).toBe(true);
	});
});
