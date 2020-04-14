import { ADD_CITY, DELETE_CITIES } from '../constants';

const initialState = {};

const cities = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return { ...state, [action.city]: action.city };
        case DELETE_CITIES:
            return {};
        default:
            return state;
    }
};

export default cities;
