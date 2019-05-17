const initialState = [];

const forecast = (state = initialState, action) => {
  if (action.type === "WEATHER_FORECAST") {
    return [...state, action.payload];
  }
  return state;
};

export default forecast;
