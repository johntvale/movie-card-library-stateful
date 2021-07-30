// implement AddMovie component here
import React from 'react';
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
    // this.handleButton = this.handleButton.bind(this);
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
    // this.props.rating
    // let atual = 0;
    // if (typeof(rating) === 'number') {
    //   atual =
    // }
    this.setState({
      [name]: value,
    });
  }

  // handleButton(event) {
  //   event.preventDefault();
  //   this.setState({
  //     title: '',
  //     subtitle: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   });
  //   console.log(this.state);
  // }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <h2>Adicionar filme à lista</h2>
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

export default AddMovie;
