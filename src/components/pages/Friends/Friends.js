import React from 'react';
import './Friends.scss';

class Friends extends React.Component {
  changeView = (e) => {
    const view = e.target.closest('.card').id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className="Friends mx-auto">
       <h2>Friends</h2>
        <div className="card-deck mt-3">
          <div className="card border-dark" id="friends/new" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-address-book fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">New Friend</h6>
              <p className="card-text">Add a new friend!</p>
            </div>
          </div>
          <div className="card border-dark bg-success" id="friends" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-user-friends fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
              <p className="card-text">Your Friends!</p>
            </div>
          </div>
          <div className="card border-dark" id="friends/:id/edit" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-user-edit fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Edit Friend</h6>
              <p className="card-text">Change your friends!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
