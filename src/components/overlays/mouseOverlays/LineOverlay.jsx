import React from 'react';
import PropTypes from 'prop-types';

import { getHexLine } from '../../../utils/hexMath';
import { getAreaOutlinePath } from '../../../utils/hexDraw';
import { hexArrayToMap } from '../../../utils/hexStructures';
import { BaseOverlay, propLine } from './BaseOverlay';

const getOutline = ({from, to}) =>
  getAreaOutlinePath(hexArrayToMap(getHexLine(from, to)));

const LineOverlay = props => (
  <BaseOverlay
    outline={getOutline(propLine(props))}
    classMod={props.classMod} />
);

LineOverlay.propTypes = {
  classMod: PropTypes.string,
};
export default LineOverlay;
