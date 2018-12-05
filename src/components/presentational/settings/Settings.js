import './style.scss';
import React, { Fragment } from "react";
import PropTypes from "prop-types";

import cakeImg from '../../../images/cake.jpg';
import chameleonImg from '../../../images/chameleon.jpg';
import bananImg from '../../../images/banan.jpg';

const Settings = ({ handleChangeBackCard, handleChangeLevel }) => (
    <Fragment>
        <h3 className="choose">Choose:</h3>
        <div id="choose-block-container">
            <div className="choose-cards-container">
                <h3>Back cards</h3>
                <div className="choose-cards">
                    <div>
                        <input type="radio" name="back" id="back1" onChange={handleChangeBackCard} />
                        <label htmlFor="back1"><img src={`/${chameleonImg}`} alt="chameleon" /></label>
                    </div>
                    <div>
                        <input type="radio" name="back" id="back2" onChange={handleChangeBackCard} defaultChecked />
                        <label htmlFor="back2"><img src={`/${bananImg}`} alt="banan" /></label>
                    </div>
                    <div>
                        <input type="radio" name="back" id="back3" onChange={handleChangeBackCard} />
                        <label htmlFor="back3"><img src={`/${cakeImg}`} alt="cake" /></label>
                    </div>
                </div>
            </div>
            <div className="choose-cards-container">
                <h3>Game difficulty</h3>
                <div className="choose-cards">
                    <div>
                        <input type="radio" name="level" id="level1" onChange={handleChangeLevel} />
                        <label htmlFor="level1">Low (5 x 2)</label>
                    </div>
                    <div>
                        <input type="radio" name="level" id="level2" onChange={handleChangeLevel} defaultChecked />
                        <label htmlFor="level2">Medium (6 x 3)</label>
                    </div>
                    <div>
                        <input type="radio" name="level" id="level3" onChange={handleChangeLevel} />
                        <label htmlFor="level3">High (8 x 3)</label>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

Settings.propTypes = {
    handleChangeBackCard: PropTypes.func.isRequired,
    handleChangeLevel: PropTypes.func.isRequired,
};

export default Settings;
