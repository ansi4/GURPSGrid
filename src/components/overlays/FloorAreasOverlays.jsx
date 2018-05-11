import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './FloorAreasOverlays.styl';

import { getCurrentFloorAreaPath } from '../../selectors/index';

const FloorAreasOverlays = props => props.path
    ? <path d={props.path} className="FloorAreasOverlay" />
    : null;

FloorAreasOverlays.propTypes = {
  path: PropTypes.string,
};
const mapStateToProps = (state, props) => ({
  path: getCurrentFloorAreaPath(state, props),
});

export default connect(mapStateToProps)(FloorAreasOverlays);
