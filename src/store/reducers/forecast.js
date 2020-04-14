import { WEATHER_FORECAST } from '../constants';

const initialState = {};

const forecast = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_FORECAST:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default forecast;
