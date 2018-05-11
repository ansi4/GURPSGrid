import React from 'react';
import PropTypes from 'prop-types';

const overlayClass = (postfix, mod) =>
    `MouseOverlay__${postfix} MouseOverlay__${postfix}_${mod}`;

const BaseOverlay = props => (
    <g className="MouseOverlay">
        <path d={props.outline} className={overlayClass('bg', props.classMod)} />
        {props.children}
    </g>
);
BaseOverlay.propTypes = {
    outline: PropTypes.string.isRequired,
    classMod: PropTypes.string.isRequired,
    children: PropTypes.object,
};

const propLine = ({row, col, toRow, toCol}) => {
    const from = {col, row};
    const to = {
        col: col === null ? col : toCol,
        row: toRow === null ? row : toRow,
    };
    return { from, to };
};
propLine.PropTypes = {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    toCol: PropTypes.number,
    toRow: PropTypes.number,
};

export { propLine, overlayClass, BaseOverlay };
