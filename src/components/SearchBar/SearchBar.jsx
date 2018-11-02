import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ""
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.getForecast(this.state.query);
	}

	render() {
		const { query } = this.state;

		return (
			<div className="searchbar">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="query"
						value={query}
						onChange={this.handleInput}
					/>
					<input type="submit" value="Go" />
				</form>
			</div>
		);
	}
}

SearchBar.propTypes = {
	getForecast: PropTypes.func.isRequired
};

export default SearchBar;
