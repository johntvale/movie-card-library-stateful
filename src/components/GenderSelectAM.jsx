import React from 'react';
import PropTypes from 'prop-types';

class GenderSelectAM extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        className="form-input-label"
        htmlFor="Gender-Select-AM"
      >
        Gênero
        <select
          id="Gender-Select-AM"
          className="form-input"
          name="genre"
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenderSelectAM.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenderSelectAM;
