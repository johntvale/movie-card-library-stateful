import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          id="subtitle-input"
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SubtitleInput;