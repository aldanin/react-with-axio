import axios from 'axios'

export function getUsers() {
    return (dispatch) => {
        axios.get('http://localhost:20813/api/values')
         // axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return dispatch(loadUsers(response.data))
            })
    }
}

export function loadUsers(users) {
    return {
        type: 'LOAD_USERS',
        users
    }
}