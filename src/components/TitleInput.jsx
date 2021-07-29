import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          id="title-input"
          type="text"
          name="title"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TitleInput;
