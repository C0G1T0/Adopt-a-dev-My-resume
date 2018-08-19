import { ADD_BASKET, DELETE_BASKET } from "../actions/types";

const initialState = {
  basket: ["0"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      console.log(state.basket);
      console.log(action.payload);
      const duplicate = state.basket.includes(action.payload);
      console.log(duplicate);

      if (!duplicate) {
        return {
          ...state,
          basket: [action.payload, ...state.basket]
        };
      } else {
        return {
          ...state
        };
      }

    case DELETE_BASKET:
      return {
        ...state,
        basket: state.basket.filter(skill => skill._id !== action.payload)
      };
    default:
      return state;
  }
};
