import {
    APPLY_LEAVE, LEAVE_HISTORY, PROFILE, SETTING, MANAGE_LEAVE,
    LEAVE_ALLOCATION, MANAGE_EMPLOYEE, MANAGE_DEPARTMENT, 
    SYSTEM_SETTING, CALENDAR
} from "../../action/siderNavigation/SiderNavigation";

const initState = {
    pagePath: "/applyLeave"
}

export const SiderNavigationReducers = (state = initState, action) => {
    switch (action.type) {
        case APPLY_LEAVE:
            return {
                ...state,
                pagePath: (state.pagePath = "/applyLeave")
            }
        case LEAVE_HISTORY:
            return {
                ...state,
                pagePath: (state.pagePath = "/leaveHistory")
            }
        case PROFILE:
            return {
                ...state,
                pagePath: (state.pagePath = "/profile")
            }
        case SETTING:
            return {
                ...state,
                pagePath: (state.pagePath = "/settings")
            }
        case MANAGE_LEAVE: 
            return {
                ...state,
                pagePath: (state.pagePath = "/manageLeave")
            }
        case LEAVE_ALLOCATION:
            return {
                ...state,
                pagePath: (state.pagePath = "/leaveAllocation")
            }
        case MANAGE_EMPLOYEE:
            return {
                ...state,
                pagePath: (state.pagePath = "/manageEmployee")
            }
        case MANAGE_DEPARTMENT:
            return {
                ...state,
                pagePath: (state.pagePath = "/manageDepartment")
            }
        case SYSTEM_SETTING:
            return {
                ...state,
                pagePath: (state.pagePath = "/systemSetting")
            }
        case CALENDAR:
            return {
                ...state,
                pagePath: (state.pagePath = "/calendar")
            }
        default:
            return state;
    }
}