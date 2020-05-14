import { combineReducers } from "redux";
import { HeaderNavigationReducer } from "./headerReducer/HeaderReducer";
import { SiderNavigationReducers } from "./siderReducer/SiderReducer";

const allReducer = combineReducers({
    HeaderNavigationReducer,
    SiderNavigationReducers
});

export default allReducer;


