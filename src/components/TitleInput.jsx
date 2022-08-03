import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title-input"
        className="form-input-label"
      >
        Título
        <br />
        <input
          id="title-input"
          className="form-input"
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleInput;
