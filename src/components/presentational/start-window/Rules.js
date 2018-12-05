import './style.scss';
import React from "react";
import { Link } from 'react-router-dom';

const Rules = () => (
    <div className="start-game">
        <div className="rules">
            <h5>Welcome to</h5>
            <h1>Match-Match Game</h1>
            <div className="about-game">
                <p>Memory is a counter game where the object is to find pairs</p>
                <p>When the game begins all pictures are hidden</p>
            </div>
            <div className="how-to-play">
                <h3>How to play</h3>
                <ul>
                    <li>Select two cards to try to match the pictures</li>
                    <li>If you match the pictures you can go again</li>
                    <li>If they don't match it is the computer turn them</li>
                    <li>The player that finds all pairs wins</li>
                    <li>Have Fun!</li>
                </ul>
            </div>
            <Link to='/registration'>
                <button className="continue"></button>
            </Link>
            <p>Continue</p>
        </div>
    </div>
);

export default Rules;
