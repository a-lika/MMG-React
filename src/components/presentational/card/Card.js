import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ frontImage, backImage, borderC, identify }) => {
    const backStyles = {
        backgroundImage: `url(/${backImage})`,
        borderColor: borderC
    };
    const frontStyles = {
        backgroundImage: `url(/${frontImage})`
    };
    return (
        <div className={`card-container ${identify}`}>
            <div className="card">
                <div className="back-card" style={backStyles}></div>
                <div className="front-card" style={frontStyles}></div>
            </div>
        </div>
    )
};

Card.propTypes = {
    borderC: PropTypes.string.isRequired,
    identify: PropTypes.string.isRequired,
    frontImage: PropTypes.string.isRequired,
    backImage: PropTypes.string.isRequired,
};

export default Card;
