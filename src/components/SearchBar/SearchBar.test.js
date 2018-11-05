import Component from "./SearchBar/";

let props;
let mounted;
const wrapper = options => {
	if (!mounted) mounted = mount(<Component {...props} />, options);
	return mounted;
};

beforeEach(() => {
	mounted = undefined;
	props = {
		getForecast: jest.fn().mockImplementation(() => Promise.resolve())
	};
});

describe("<SearchBar> component", () => {
	test("renders in DOM", () => {
		expect(wrapper().exists()).toBe(true);
	});

	test("renders form with onSubmit handler", () => {
		const handleSubmitFn = jest.spyOn(Component.prototype, "handleSubmit");

		wrapper()
			.find("form")
			.simulate("submit");

		expect(handleSubmitFn).toHaveBeenCalled();

		handleSubmitFn.mockRestore();
	});

	test("renders input with onChange handler", () => {
		const handleInputFn = jest.spyOn(Component.prototype, "handleInput");

		wrapper()
			.find('input[type="text"]')
			.simulate("change");

		expect(handleInputFn).toHaveBeenCalled();

		handleInputFn.mockRestore();
	});
});

describe("class property function : handleInput", () => {
	let setStateFn;

	beforeAll(() => {
		setStateFn = jest.spyOn(Component.prototype, "setState");
	});

	beforeEach(() => {
		setStateFn.mockClear();
	});

	afterAll(() => {
		setStateFn.mockRestore();
	});

	test("updates state with expected value", () => {
		wrapper()
			.instance()
			.handleInput({
				target: {
					name: "MOCK_NAME",
					value: "MOCK_VALUE"
				}
			});

		expect(setStateFn).toHaveBeenCalledWith({
			MOCK_NAME: "MOCK_VALUE"
		});
	});
});

describe("class property function : handleSubmit", () => {
	test("calls prop getForecast with query", () => {
		wrapper().setState({
			query: "MOCK_QUERY"
		});

		wrapper()
			.instance()
			.handleSubmit(new Event("MOCK"));

		expect(props.getForecast).toHaveBeenCalledWith(
			"MOCK_QUERY",
			expect.any(String),
			expect.any(Number)
		);
	});

	test("if query is undefined, prop getForecast is not called", () => {
		wrapper()
			.instance()
			.handleSubmit(new Event("MOCK"));

		expect(props.getForecast).not.toHaveBeenCalled();
	});
});
