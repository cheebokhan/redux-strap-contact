import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
import EditReducer from "./EditReducer";


const rootReducer=combineReducers({
    ContactReducer,
    EditReducer
});

export default rootReducer;