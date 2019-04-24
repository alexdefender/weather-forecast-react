const initialState = [];

export default function weather(state = initialState, action) {
    if (action.type === "CURRENT_WEATHER") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
