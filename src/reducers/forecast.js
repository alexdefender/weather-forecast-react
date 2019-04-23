const initialState = [];

export default function weather(state = initialState, action) {
    if (action.type === "WEATHER_FORECAST") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
