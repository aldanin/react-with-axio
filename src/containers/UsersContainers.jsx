import React from 'react'
import PropTypes from 'prop-types'
import UsersComponent from '../components/UsersComponent'
import * as actionBuilders from '../state/actions/users'
import {connect} from 'react-redux'
import axios from "axios/index";
import {loadUsers} from "../state/actions/users";


class UsersContainers extends React.Component {
    static defaultProps={
        users : []
    };

    static propTypes={
        users : PropTypes.array,
        getUsers : PropTypes.func
    };

    state={};

    componentDidMount(){

    }

    render() {
        console.log('rendered')
        return (
            <UsersComponent users={this.props.users} loadUsers={this.props.getUsers}></UsersComponent>
        );
    }
}

const mapStateToProps=(state => {
    return {
        users : state.users
    }
});

const mapDispatchToProps=(dispatch => {
    return {
        getUsers : () => {
            return (dispatch) => {
                axios.get('https://jsonplaceholder.typicode.com/users')
                     .then(response => {
                         return dispatch(loadUsers(response.data))
                     })
            }
        }
    }
});

export function getUsers() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(response => {
                 return dispatch(loadUsers(response.data))
             })
    }
}

export default connect(mapStateToProps, actionBuilders)(UsersContainers);
