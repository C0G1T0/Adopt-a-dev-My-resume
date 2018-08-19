import axios from "axios";

import { GET_SKILLS } from "./types";

// Get Posts
export const getSkills = () => dispatch => {
  axios
    .get("/skills")
    .then(res =>
      dispatch({
        type: GET_SKILLS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SKILLS,
        payload: null
      })
    );
};
