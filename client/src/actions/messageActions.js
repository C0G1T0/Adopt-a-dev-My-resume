import axios from "axios";
import { GET_ERRORS } from "./types";
import { THANK_U } from "./types";
export const sendMessage = (newMessage, history) => dispatch => {
  axios
    .post("/message", newMessage)
    .then(res => {
      dispatch({
        type: THANK_U,
        payload: res.data
      });
      history.push("/thank-you");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
