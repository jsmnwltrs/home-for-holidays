import React from 'react';
// import { Button } from 'reactstrap';
import authRequests from '../../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.history.push('/home');
    }).catch(error => console.error('error with auth', error));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-dark mt-4" onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default Auth;
