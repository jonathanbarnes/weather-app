import Component from "./ResultsContainer";
import { FETCH_STATUS } from "../../config/constants";

let props;
let mounted;
const wrapper = options => {
	if (!mounted) mounted = shallow(<Component {...props} />, options);
	return mounted;
};

beforeEach(() => {
	mounted = undefined;
	props = {
		fetchStatus: FETCH_STATUS.IDLE
	};
});

describe("<ResultsContainer> component", () => {
	test("renders in DOM", () => {
		expect(wrapper().exists()).toBe(true);
	});
});
