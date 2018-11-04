import Component from "./SearchBar";

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

describe("<SearchBar> component", () => {
	test("renders in DOM", () => {
		expect(wrapper().exists()).toBe(true);
	});
});
