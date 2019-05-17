const initialState = [];

const current = (state = initialState, action) => {
  if (action.type === "CURRENT_WEATHER") {
    return [...state, action.payload];
  }
  return state;
};

export default current;
