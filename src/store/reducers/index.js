import {combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import authReducer from "store/reducers/auth_reducer.js";
import userReducer from "store/reducers/user_reducer.js";
import notifReducer from "store/reducers/notification_reducer.js";
import machineUnitReducer from "store/reducers/machine_unit_reducer.js"

export default combineReducers({
    user: userReducer,
    auth: authReducer,
    form: reduxFormReducer,
    notifications: notifReducer,
    machineUnit: machineUnitReducer
});
