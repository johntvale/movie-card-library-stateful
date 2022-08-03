// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.updateMovieList = this.updateMovieList.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieList: [...props.movies],
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  getFilteredMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre, movieList } = this.state;
    const lowerCase = searchText.toLowerCase();

    if (lowerCase !== '') {
      const filteredByText = movieList.filter((movie) => movie.title
        .toLowerCase().includes(lowerCase)
        || movie.subtitle.toLowerCase().includes(lowerCase)
        || movie.storyline.toLowerCase().includes(lowerCase));
      return filteredByText;
    }

    if (bookmarkedOnly === true) {
      const filteredByBookmarkedOnly = movieList
        .filter((movie) => movie.bookmarked === true);
      return filteredByBookmarkedOnly;
    }

    if (selectedGenre !== '') {
      const filteredBySelectedGenre = movieList
        .filter((movie) => movie.genre === selectedGenre);
      return filteredBySelectedGenre;
    }
    return movieList;
  }

  updateMovieList(newMovie) {
    this.setState((prevState) => ({
      movieList: [...prevState.movieList, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ this.getFilteredMovieList() }
        />
        <AddMovie onClick={ this.updateMovieList } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      subtitle: PropTypes.string,
      title: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
