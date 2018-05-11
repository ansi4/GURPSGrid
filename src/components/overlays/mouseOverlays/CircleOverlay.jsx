import React from 'react';
import PropTypes from 'prop-types';

import { getHexCircle, oddrToPixels } from '../../../utils/hexMath';
import { hexArrayToMap } from '../../../utils/hexStructures';
import { getAreaOutlinePath } from '../../../utils/hexDraw';
import { BaseOverlay } from './BaseOverlay';

const getOutline = (center, radius) => {
  return getAreaOutlinePath(hexArrayToMap(getHexCircle(center, radius)));
};

const CircleOverlay = props => {
  const center = { col: props.col, row: props.row };
  const centerPixels = oddrToPixels(center);
  return (
    <BaseOverlay outline={getOutline(center, props.radius)} classMod={props.classMod}>
      <circle
        cx={centerPixels.x}
        cy={centerPixels.y}
        r={props.pixelRadius}
        className="MouseOverlay__aux"
      />
    </BaseOverlay>
  );
};
CircleOverlay.propTypes = {
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  radius: PropTypes.number,
  pixelRadius: PropTypes.number,
  classMod: PropTypes.string,
};

CircleOverlay.defaultProps = {
  radius: 0,
  pixelRadius: 0,
};
export default CircleOverlay;

