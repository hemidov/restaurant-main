// import{ SET_ORDERS}from "../Actions/Action"

const cart = [];
export const MenyuReducer = (state = cart, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return state.length ? [...state, action.payload] : [action.payload];
      break;
    case "RESET_ORDERS":
      return [];
      break;

    default:
      return state;
  }
};
