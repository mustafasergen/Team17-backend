import {
    USER_MYDETAILS_FAIL,
    USER_MYDETAILS_SUCCESS,
    USER_MYDETAILS_REQUEST,
    USER_MYDETAILS_RESET,
    USER_UPDATE_MYPROFILE_REQUEST,
    USER_UPDATE_MYPROFILE_SUCCESS,
    USER_UPDATE_MYPROFILE_FAIL,
    USER_UPDATE_MYPROFILE_RESET,
    USER_MYLIST_REQUEST,
    USER_MYLIST_SUCCESS,
    USER_MYLIST_FAIL,
    USER_MYLIST_RESET,
} from '../constants/profileConstants'


export const userMyDetailsReducer = (state = { Myuser: {} }, action) => {
    switch (action.type) {
        case USER_MYDETAILS_REQUEST:
            return { ...state, loading: true }

        case USER_MYDETAILS_SUCCESS:
            return { loading: false, Myuser: action.payload }

        case USER_MYDETAILS_FAIL:
            return { loading: false, error: action.payload }

        case USER_MYDETAILS_RESET:
            return { Myuser: {} }


        default:
            return state
    }
}


export const userUpdateMyProfileReducer = (state = { Myuser: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_MYPROFILE_REQUEST:
            return { loading: true }

        case USER_UPDATE_MYPROFILE_SUCCESS:
            return { loading: false, success: true}

        case USER_UPDATE_MYPROFILE_FAIL:
            return { loading: false, error: action.payload }

        case USER_UPDATE_MYPROFILE_RESET:
            return {Myuser:{}}

        default:
            return state
    }
}


export const userMyListReducer = (state = { Myusers: [] }, action) => {
    switch (action.type) {
        case USER_MYLIST_REQUEST:
            return { loading: true }

        case USER_MYLIST_SUCCESS:
            return { loading: false, users: action.payload }

        case USER_MYLIST_FAIL:
            return { loading: false, error: action.payload }

        case USER_MYLIST_RESET:
            return { Myusers: [] }

        default:
            return state
    }
}



