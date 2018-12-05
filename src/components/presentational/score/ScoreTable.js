import './style.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const createUser = (users) => {
    let user = users.map((el, i, arr) => {
        return (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>{el.score}</td>
            </tr>
        )
    })
    return user;
};

const ScoreTable = ({ users }) => {
    let user = createUser(users);
    return (
        <Fragment>
            <table>
                <caption>Top-10 Scores</caption>
                <thead>
                    <tr>
                        <td>Position</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Time</td>
                    </tr>
                </thead>
                <tbody>
                    {user}
                </tbody>
            </table>
        </Fragment>
    )
};

ScoreTable.propTypes = {
    users: PropTypes.array.isRequired,
};

export default ScoreTable;
