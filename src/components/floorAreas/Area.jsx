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
    path: PropTypes.string.isRequired,
    texture: PropTypes.string,
  };

export { Area };
