// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePath from './ImagePath';
import TextArea from './TextArea';
import NumberInput from './NumberInput';
import GenderSelectAM from './GenderSelectAM';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="form-container">
        <h3>Não encontrou o que procurava ? Adicione um filme à lista 😉</h3>
        <form data-testid="add-movie-form">
          <TitleInput value={ title } onChange={ this.handleChange } />
          <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
          <ImagePath value={ imagePath } onChange={ this.handleChange } />
          <TextArea value={ storyline } onChange={ this.handleChange } />
          <NumberInput value={ rating } onChange={ this.handleChange } />
          <GenderSelectAM value={ genre } onChange={ this.handleChange } />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.handleButton }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
