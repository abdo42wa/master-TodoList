export const userLogin = (user) => async (dispatch) => {

    try {
        dispatch({
            type: 'USER_LOGGED_IN',
            payload: user
        })
    } catch (error) {
        console.log(error)
    }

}


export const userLogout = () => (dispatch) =>{
    try {
        dispatch({
            type: 'USER_LOGOUT',
            payload: null
        })
    } catch (error) {
        console.log(error)
    }
}