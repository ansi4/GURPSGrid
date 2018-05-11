import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './MouseOverlays.styl';

import { OVERLAYS_COMPONENTS_MAP } from '../../config/mouseOverlays';

const renderOverlay = (overlayData) => {
  const Component = OVERLAYS_COMPONENTS_MAP[overlayData.type];
  return Component ? <Component key={overlayData.id} {...overlayData} /> : null;
};

const MouseOverlays = props => props.overlays.map(renderOverlay);
MouseOverlays.propTypes = {
  overlays: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ overlays }) => ({ overlays });

export default connect(mapStateToProps)(MouseOverlays);
