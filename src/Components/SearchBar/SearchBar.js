import React, { Component } from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="SearchBar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel">Search</span>
          </button>

          <input
            value={this.state.query}
            className="SearchFormInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
