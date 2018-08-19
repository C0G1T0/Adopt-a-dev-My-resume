import { THANK_U } from "../actions/types";

const initialState = {
  contact: { firstname: "" }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case THANK_U:
      return {
        contact: action.payload
      };
    default:
      return state;
  }
}
