import axios from 'axios'
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

export const getMyUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_MYDETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/my/${id}/`,
            config
        )

        dispatch({
            type: USER_MYDETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_MYDETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateMyUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_MYPROFILE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/users/my/profile/${user.id}/`,
            user,
            config
        )

        dispatch({
            type: USER_UPDATE_MYPROFILE_SUCCESS,
        })

        dispatch({
            type: USER_MYDETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_UPDATE_MYPROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
