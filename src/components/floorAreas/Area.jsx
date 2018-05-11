import React from 'react';
import PropTypes from 'prop-types';

const Area = props => (
    <path
      d={props.path}
      className="SVGFloorArea"
      style={{
        fill: `url(#${props.texture})`,
      }}
    />
  );

  Area.propTypes = {
    path: PropTypes.object.isRequired,
    texture: PropTypes.string.isRequired,
  };

export default Area;
