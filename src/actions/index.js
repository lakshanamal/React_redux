export const increment = (mp) => {
  return {
    type: "INCREMENT",
    payload: mp,
  };
};

export const decrement = (mp) => {
  return {
    type: "DECREMENT",
    payload: mp,
  };
};
