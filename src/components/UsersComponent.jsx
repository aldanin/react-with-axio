import React from 'react'
import PropTypes from 'prop-types'

class UsersComponent extends React.Component {
    static defaultProps={
        users : []
    };

    static propTypes={
        users : PropTypes.array,
        loadUsers : PropTypes.func
    };

    state={};

    render() {
        return (
            <React.Fragment>
                <div style={{display : 'flex', flexDirection : 'column'}}>
                    <div>
                        <button onClick={() => this.props.loadUsers()}>More Users</button>
                    </div>
                    <h2>USERS</h2>
                    <ul style={{overflow : 'auto', height : '400px'}}>
                        {this.props.users.map(user => {
                            return (
                                <li key={user.id}>{user.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>Alo</div>
            </React.Fragment>
        );
    }
}

export default UsersComponent;
