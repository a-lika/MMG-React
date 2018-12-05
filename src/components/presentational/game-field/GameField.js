import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const GameField = ({ content, handleClickClose }) => (
    <div className="menu-info">
        <div className="menu-content">
            <Fragment>{content}</Fragment>
        </div>
        <div className="close" onClick={handleClickClose}></div>
    </div>
);

GameField.propTypes = {
    content: PropTypes.node,
    handleClickClose: PropTypes.func.isRequired,
};

export default GameField;
