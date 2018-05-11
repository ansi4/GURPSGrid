import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTextures } from '../../selectors/index';
import { renderOption, renderValue } from './TextureOption';
import './TexturesSelect.styl';

const TexturesSelect = props => (
  <Select
    className="ui-texturesSelect"
    clearable={false}
    searchable={false}
    options={props.textures}
    labelKey="name"
    valueKey="id"
    value={props.selectedId}
    onChange={props.onChange}

    optionRenderer={renderOption}
    valueRenderer={renderValue}
  />
);

TexturesSelect.propTypes = {
  textures: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  textures: getTextures(state),
});

export default connect(mapStateToProps)(TexturesSelect);
