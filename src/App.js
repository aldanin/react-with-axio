import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {createStore, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Reducers from './state/reducers/users'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Users from './containers/UsersContainers'
import Cars from './components/CarsComponent'

const store=createStore(Reducers, applyMiddleware(Thunk))

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>

                    </header>
                    <Router>
                        <div>  <Link to='/'>Users</Link>
                            <Link to='/cars'>Cars</Link>

                            <Route path={'/'} exact={true} render={
                                () => (
                                    <Users/>
                                )}
                            />
                            <Route path={'/cars'} exact={true} render={
                                () => (
                                    <Cars/>
                                )}
                            />
                        </div>
                    </Router>
                </div>

            </Provider>
        );
    }
}

export default App;
