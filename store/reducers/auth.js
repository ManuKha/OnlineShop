import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
    token: null,
    userId: null,
    isAdmin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                token: action.token,
                userId: action.userId,
                isAdmin: action.isAdmin
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};