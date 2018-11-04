import React, { Component } from "react";
import PropTypes from "prop-types";
import * as copy from "../../config/copy";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: "London"
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
	}

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const { query } = this.state;
		const { getForecast } = this.props;

		if (query) {
			this.input.current.blur();
			getForecast(query, "GB", 1000);
		}
	}

	componentDidMount() {
		this.input.current.focus();
	}

	render() {
		const { query } = this.state;

		return (
			<div className="search-bar">
				<form className="search-bar__form" onSubmit={this.handleSubmit}>
					<h1 className="search-bar__copy">{copy.title}</h1>
					<input
						className="search-bar__input"
						type="text"
						name="query"
						value={query}
						onChange={this.handleInput}
						placeholder={copy.searchBarPlaceholder}
						required
						ref={this.input}
					/>
					<input
						className="search-bar__submit"
						type="submit"
						value="&rarr;"
					/>
				</form>
			</div>
		);
	}
}

SearchBar.propTypes = {
	getForecast: PropTypes.func.isRequired
};

export default SearchBar;
