import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Area from './Area';
import { getFloorAreas, getTextureToUrlMap, getAreaPathCached } from '../../selectors/index';

//TODO: move getAreaPathCached to selector
const FloorAreas = props => (
  <g> { props.floorAreas.map(area =>
    <Area key={area.id} texture={props.textures[area.textureId]} path={getAreaPathCached(area.hexes)} />)}
  </g>
);

FloorAreas.propTypes = {
  floorAreas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  textures: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  floorAreas: getFloorAreas(state),
  textures: getTextureToUrlMap(state),
});

export default connect(mapStateToProps)(FloorAreas);
