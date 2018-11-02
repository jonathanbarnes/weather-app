import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../configureStore";
import App from "../App/";

const Root = () => (
	<Provider store={configureStore()}>
		<App />
	</Provider>
);

Root.propTypes = {};

export default Root;
