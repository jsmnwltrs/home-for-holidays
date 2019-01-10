import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';
import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Friends from '../components/pages/Friends/Friends';
import Holidays from '../components/pages/Holidays/Holidays';
import NewFriend from '../components/pages/NewFriend/NewFriend';
import EditFriend from '../components/pages/EditFriend/EditFriend';
import NewHoliday from '../components/pages/NewHoliday/NewHoliday';
import EditHoliday from '../components/pages/EditHoliday/EditHoliday';
import HolidayDetail from '../components/pages/HolidayDetail/HolidayDetail';
import HolidayFriends from '../components/pages/HolidayFriends/HolidayFriends';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: './home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: './auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    currentUid: '',
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const currentUid = authRequests.getCurrentUid();
        this.setState({ authed: true, currentUid, pendingUser: false });
      } else {
        this.setState({ authed: false, currentUid: '', pendingUser: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  logoutClickEvent = () => {
    authRequests.logoutUser();
    this.setState({ authed: false, currentUid: '' });
  }


  render() {
    const { authed, pendingUser } = this.state;
    if (pendingUser) {
      return null;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar isAuthed={authed} logoutClickEvent={this.logoutClickEvent}/>
            <div className="container">
              <div className="row">
                <Switch>
                  <PrivateRoute path='/holidays/:id/friends' component={HolidayFriends} authed={authed} />
                  <PrivateRoute path='/holidays/:id/edit' component={EditHoliday} authed={authed} />
                  <PrivateRoute path='/holidays/new' component={NewHoliday} authed={authed} />
                  <PrivateRoute path='/holidays/:id' component={HolidayDetail} authed={authed} />
                  <PrivateRoute path='/holidays' component={Holidays} authed={authed} />
                  <PrivateRoute path='/friends/:id/edit' component={EditFriend} authed={authed} />
                  <PrivateRoute path='/friends/new' component={NewFriend} authed={authed} />
                  <PrivateRoute path='/friends' component={Friends} authed={authed} />
                  <PrivateRoute path='/home' component={Home} authed={authed} />
                  <PublicRoute path='/auth' component={Auth} authed={authed} />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
