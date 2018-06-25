const initialState = {
    users: []
}

export default function UsersReducer(state=initialState, action) {
    switch(action.type){
        case 'LOAD_USERS':
            const newState = {
                ...state,
                users: state.users.slice(0, state.users.length).concat(action.users)
            }
            return newState;
        default:
            return state;
    }
}
