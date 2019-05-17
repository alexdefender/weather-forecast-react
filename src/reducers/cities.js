const initialState = [];

const cities = (state = initialState, action) => {
  if (action.type === "ADD_CITY") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_CITIES") {
    return [action.payload];
  }
  return state;
};

export default cities;
