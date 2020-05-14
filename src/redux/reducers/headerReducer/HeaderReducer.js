import {
    MY_LEAVE_NAVIGATION, MANAGE_LEAVE_NAVIGATION, MANAGE_EMPLOYEE_NAVIGATION, MY_PROFILE_NAVIGATION,
    CONFIGURATION_NAVIGATION
} from "../../action/headerNavigation/HeaderNavigation";

const initState = {
    path:"/myleave"
}
export const HeaderNavigationReducer = (state=initState, action) => {
    
    switch (action.type) {
        
        case MY_LEAVE_NAVIGATION:
            console.log("hit in reducer leave")
            return {
                ...state,
                path: (state.path = "/myleave")
            };
        case MY_PROFILE_NAVIGATION:
            console.log("hit in reducer profile")
                return {
                    ...state,
                    path: (state.path = "/myprofile")
            };
            case MANAGE_EMPLOYEE_NAVIGATION:
                return {
                    ...state,
                    path: (state.path = "/manageEmployee")
            };
            case MANAGE_LEAVE_NAVIGATION:
                return {
                    ...state,
                    path: (state.path = "/manageLeave")
            };
            case CONFIGURATION_NAVIGATION:
                return {
                    ...state,
                    path: (state.path = "/configuration")
            };
        
        default:
            return state;

    }
    

}
