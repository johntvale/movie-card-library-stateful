// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

import IncludesText from './IncludesText';

class SearchBar extends React.Component {
  render() {
    const { searchText, selectedGenre } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <h2>Pequisar filme</h2>
        <form data-testid="search-bar-form">
          <IncludesText value={ searchText } onChange={ onSearchTextChange } />
          <label data-testid="checkbox-input-label" htmlFor="show-favorites">
            Mostrar somente favoritos
            <input
              id="show-favorites"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label data-testid="select-input-label" htmlFor="filter-by-gender">
            Filtrar por gênero
            <select
              name=""
              id="filter-by-gender"
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
