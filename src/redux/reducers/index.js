import { combineReducers } from "redux";
import { HeaderNavigationReducer } from "./headerReducer/HeaderReducer";

const allReducer = combineReducers({ HeaderNavigationReducer: HeaderNavigationReducer });

export default allReducer;


