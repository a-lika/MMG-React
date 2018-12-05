import {
    CHANGE_BACK_CARDS,
    CHANGE_LEVEL,
    ADD_USER_INFO,
    RESTART_GAME,
    GET_TOP_USERS,
    GAME_OVER,
} from '../constants';

export const restartGame = boolean => ({
    type: RESTART_GAME,
    payload: boolean,
});

export const changeLevel = id => ({
    type: CHANGE_LEVEL,
    payload: id,
});

export const changeBackCards = id => ({
    type: CHANGE_BACK_CARDS,
    payload: id,
});

export const addUserInfo = (firstName, lastName, email) => ({
    type: ADD_USER_INFO,
    payload: {
        firstName,
        lastName,
        email,
    },
});

export const getTopUsers = object => ({
    type: GET_TOP_USERS,
    payload: object,
});

export const gameOver = boolean => ({
    type: GAME_OVER,
    payload: boolean,
});
