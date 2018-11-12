import { TEST_REDUCER } from "./types";
import { FETCH_USER } from "./types";
import axios from "axios";

export const fetchUserAction = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  //LOGGER
  console.log(
    "\n < actions/index.js:7 > fetchUserAction() --> response.data = \n"
  );
  console.log(res.data);
    console.log(
        "\n < actions/index.js:7 > fetchUserAction() --> response = \n"
    );
  console.log(res);
    console.log(
        "\n < actions/index.js:7 > fetchUserAction() --> response.headers = \n"
    );
    console.log(res.headers);
//END LOGGER
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const switchAuth = () => async dispatch => {
  const permitted = true;
  //LOGGER
  console.log(
    "\n < actions/index.js:23 > switchAuth() --> const permitted = \n"
  );
  console.log(permitted);
  // END LOGGER
  dispatch({
    type: FETCH_USER,
    payload: permitted
  });
};

export const testReducerAction = () => dispatch => {
  const payload = "test reducer action payload";
  console.log(payload);

  dispatch({
    type: TEST_REDUCER,
    payload: payload
  });
};
