const initialState = [];

export default function weather(state = initialState, action) {
    // console.log(...state)
    if (action.type === "CURRENT_WEATHER") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
