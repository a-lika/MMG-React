import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ minutes, seconds }) => (
    <div className="timer">
        <span id="minutes">{minutes}</span> :
        <span id="seconds">{seconds}</span>
    </div>
);

Timer.propTypes = {
    minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Timer;
