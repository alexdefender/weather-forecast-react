import { CURRENT_WEATHER } from '../constants';

const initialState = {};

const current = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_WEATHER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default current;
