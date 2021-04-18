export const userReducer = (state ={curentuser: null}, action) => {

    switch(action.type){
        case 'USER_LOGGED_IN' :
            return  {
                curentuser: action.payload
            }
        case 'USER_LOGOUT':
            return {
                currentUser : action.payload
            }

        default:
            return state
    }
}


export const TaskListReducer = (state = {curentTasks: []}, action) => {

    switch(action.type){
        case 'TASK_LIST_REQUEST':
            return {loading: true, curentTasks: []}


        case 'Task_LIST_SUCCESS' :
            return  {
                curentTasks: action.payload
            }


        default:
            return state
    }
}