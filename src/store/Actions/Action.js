// export const SET_ORDERS = 'SET_ORDERS';

export const setOrders = (payload) => {
  return {
    type: "SET_ORDERS",
    payload: payload,
  };
};

export const resetOrders = (payload) => {
  return {
    type: "RESET_ORDERS",
    payload: payload,
  };
};
