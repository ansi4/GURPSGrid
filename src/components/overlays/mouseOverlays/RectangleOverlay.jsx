import React from 'react';
import PropTypes from 'prop-types';

import { getRectOutlinePath } from '../../../utils/hexDraw';
import { BaseOverlay, propLine } from './BaseOverlay';

const getOutline = ({from, to}) =>
  getRectOutlinePath(from, to);

const RectangleOverlay = props => (
  <BaseOverlay
    outline={getOutline(propLine(props))}
    classMod={props.classMod} />
);

RectangleOverlay.propTypes = {
  classMod: PropTypes.string,
};
export default RectangleOverlay;
