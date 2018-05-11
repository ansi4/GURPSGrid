import React from 'react';
import PropTypes from 'prop-types';

const TextureOption = props => (
    <div
        className={`ui-texturesSelect__${props.className}Display`}
        style={{
            backgroundImage: `url(${props.value && props.value.preview})`,
        }}
    />
);
TextureOption.propTypes = {
    className: PropTypes.string,
    value: PropTypes.object.isRequired,
};
TextureOption.defaultProps = {
    className: 'value',
};

const renderValue = value => <TextureOption value={value} />;
const renderOption = value => <TextureOption className="option" value={value} />;

export { renderOption, renderValue };
