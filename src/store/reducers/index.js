import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "store/reducers/auth_reducer.js";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
});
