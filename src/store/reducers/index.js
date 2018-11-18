import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import testReducer from "store/reducers/testReducer.js";
import authReducer from "store/reducers/authReducer.js";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  test: testReducer
});
