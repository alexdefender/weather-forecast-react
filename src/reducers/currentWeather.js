const initialState = [
    "CURRENT_WEATHER",
    "CURRENT_WEATHER_2"
]

export default function weather(state = initialState, action) {
    if (action.type === "CURRENT_WEATHER") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
