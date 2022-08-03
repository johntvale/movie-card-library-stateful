import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        className="form-input-label"
        htmlFor="rating-input"
      >
        Avaliação
        <input
          id="rating-input"
          className="form-input"
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
