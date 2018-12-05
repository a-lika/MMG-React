import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import TimerContainer from '../../container/TimerContainer';

const GameMenu = ({ userName, handleMenuClick }) => (
    <div className="game-menu" onClick={handleMenuClick}>
        <div className="gamer-name">{userName}</div>
        <div>
            <p className="game-link" id="options">Options</p>
        </div>
        <TimerContainer />
        <div>
            <p className="game-link" id="score">Score</p>
        </div>
        <div>
            <button className="new-game" id="new-game">New Game</button>
        </div>
    </div>
);

GameMenu.propTypes = {
    userName: PropTypes.string.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
};

export default GameMenu;
