const initialState = []

export default function weather(state = initialState, action) {
    if (action.type === "ADD_CITY") {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}
