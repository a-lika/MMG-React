import './style.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SettingsContainer from '../../container/SettingsContainer';

const Registration = ({ toStart, firstNameValue, lastNameValue, emailValue, handleChangefirstName, handleChangelastName, handleChangeEmail }) => (
    <Fragment>
        <div className="registration-container">
            <h2>Sign up and start the game</h2>
            <form onSubmit={toStart}>
                <label>First Name:<input type="text" name="first_name" onChange={handleChangefirstName} value={firstNameValue} required /></label>
                <label>Last Name:<input type="text" name="last_name" onChange={handleChangelastName} value={lastNameValue} required /></label>
                <label>E-mail:<input type="email" name="email" onChange={handleChangeEmail} value={emailValue} required /></label>

                <SettingsContainer />

                <button type="submit" className="start" id="start">Start</button>
                <p>New Game</p>
            </form>
        </div>
    </Fragment>
);

Registration.propTypes = {
    toStart: PropTypes.func.isRequired,
    firstNameValue: PropTypes.string.isRequired,
    lastNameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    handleChangefirstName: PropTypes.func.isRequired,
    handleChangelastName: PropTypes.func.isRequired,
    handleChangeEmail: PropTypes.func.isRequired,
};

export default Registration;
