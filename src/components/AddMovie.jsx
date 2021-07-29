// implement AddMovie component here
import React from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePath from './ImagePath';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <h2>Adicionar filme à lista</h2>
        <form data-testid="add-movie-form">
          <TitleInput value={ title } onChange={ this.handleChange } />
          <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
          <ImagePath value={ imagePath } onChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default AddMovie;
