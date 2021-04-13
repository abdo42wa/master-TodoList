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