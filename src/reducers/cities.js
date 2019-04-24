const initialState = []

export default function weather(state = initialState, action) {
    if (action.type === "ADD_CITY") {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === "DELETE_CITIES") {
        return [action.payload];
    }
    return state;
}
