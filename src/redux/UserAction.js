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

export const TaskList = (tasksAction) => async (dispatch) => {

    try {
        dispatch({
            type: 'Task_LIST_SUCCESS',
            payload: tasksAction
        })
    } catch (error) {
        console.log(error)
    }

}


// export const DeleteTask = () => async (dispatch) => {

//     try {
//         dispatch({
//             type: 'DELETE_TASK',
//             payload: null
//         })
//     } catch (error) {
//         console.log(error)
//     }

// }

// export const UpdateTask = (task) => async (dispatch) => {

//     try {
//         dispatch({
//             type: 'UPDATE_TASK',
//             payload: task
//         })
//     } catch (error) {
//         console.log(error)
//     }

// }


