import {
    ADD_USER_INFO,
    CHANGE_BACK_CARDS,
    CHANGE_LEVEL,
    RESTART_GAME,
    GET_TOP_USERS,
    GAME_OVER
} from '../constants';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    level: '',
    backCard: '',
    restart: false,
    topUsers: {},
    gameOver: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_INFO: {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        }
        case CHANGE_BACK_CARDS: {
            return { ...state, backCard: action.payload }
        }
        case CHANGE_LEVEL: {
            return { ...state, level: action.payload }
        }
        case RESTART_GAME: {
            return { ...state, restart: action.payload }
        }
        case GET_TOP_USERS: {
            return { ...state, topUsers: action.payload }
        }
        case GAME_OVER: {
            return { ...state, gameOver: action.payload }
        }
        default:
            return state;
    }
};
