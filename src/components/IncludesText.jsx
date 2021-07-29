import React from 'react';
import PropTypes from 'prop-types';

class IncludesText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="text-input-label" htmlFor="includes-text">
          Inclui o texto
          <input
            id="includes-text"
            name="text-input"
            data-testid="text-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

IncludesText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IncludesText;
