import React from 'react';
import PropTypes from 'prop-types';

import { getRectOutlinePath } from '../../utils/hexDraw';

class RectangleOverlay extends React.PureComponent {
  static propTypes = {
    toCol: PropTypes.number.isRequired,
    toRow: PropTypes.number.isRequired,
    fromCol: PropTypes.number,
    fromRow: PropTypes.number,
    classMod: PropTypes.string,
  };

  render () {
    const from = {col: this.props.fromCol || this.props.toCol, row: this.props.fromRow || this.props.toRow};
    const to = {col: this.props.toCol, row: this.props.toRow};
    const outline = getRectOutlinePath(from, to);

    return (
      <g className="MouseOverlay">
        <path d={outline} className={`MouseOverlay__bg MouseOverlay__bg_${this.props.classMod}`} />
      </g>
    );
  }
}

export default RectangleOverlay;
