import React from "react";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { configure, shallow, render, mount } from "enzyme";

configure({ adapter: new Adapter() });

// Make Enzyme functions available globally across all .test.js files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.getSnapshot = Component => renderer.create(Component).toJSON();
