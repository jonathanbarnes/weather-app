import Component from "./Forecast";

let props;
let mounted;
const wrapper = options => {
	if (!mounted) mounted = shallow(<Component {...props} />, options);
	return mounted;
};

beforeEach(() => {
	mounted = undefined;
	props = {};
});

describe("<Forecast> component", () => {
	test("renders in DOM", () => {
		expect(wrapper().exists()).toBe(true);
	});
});
