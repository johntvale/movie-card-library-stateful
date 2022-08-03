// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import IncludesText from './IncludesText';
import '../App.css';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, bookmarkedOnly, selectedGenre,
      onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div className="form-container">
        <h3>Buscando por algum filme em especial ? 🤔</h3>
        <form data-testid="search-bar-form">
          <IncludesText value={ searchText } onChange={ onSearchTextChange } />
          <label
            data-testid="checkbox-input-label"
            htmlFor="show-favorites"
          >
            <input
              id="show-favorites"
              data-testid="checkbox-input"
              className="form-item"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
            Mostrar somente favoritos
          </label>
          <br />
          <label
            data-testid="select-input-label"
            htmlFor="filter-by-gender"
            className="form-input-label form-item"
          >
            Filtrar por gênero
            <br />
            <select
              name=""
              id="filter-by-gender"
              className="form-input"
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
