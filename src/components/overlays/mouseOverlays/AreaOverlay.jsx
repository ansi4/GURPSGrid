import React from 'react';
import PropTypes from 'prop-types';

import { overlayClass, BaseOverlay } from './BaseOverlay';
import { getAreaOutlinePath, getAreaInnerPath } from '../../../utils/hexDraw';
import { hexArrayToMap } from '../../../utils/hexStructures';

const getOutlines = (area, col, row) => {
  const map = hexArrayToMap(area || [[col, row]]);
  return { outer: getAreaOutlinePath(map), inner: getAreaInnerPath(map) };
};

const MouseOverlay = props => {
  const {outer, inner} = getOutlines(props.areaArray, props.col, props.row);
  return (
    <BaseOverlay outline={outer} classMod={props.classMod}>
      { props.drawGrid
      && <path d={inner} className={overlayClass('grid', props.classMod)} />}
    </BaseOverlay>
  );
};

MouseOverlay.propTypes = {
  col: PropTypes.number,
  row: PropTypes.number,
  areaArray: PropTypes.array,
  classMod: PropTypes.string,
  drawGrid: PropTypes.bool,
};
MouseOverlay.defaultProps = {
  drawGrid: false,
};
export default MouseOverlay;
