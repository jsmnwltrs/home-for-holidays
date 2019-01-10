import React from 'react';
import './Holidays.scss';

class Holidays extends React.Component {
  changeView = (e) => {
    const view = e.target.closest('.card').id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className="Holidays mx-auto">
       <h2>Holidays</h2>
        <div className="card-deck mt-3">
          <div className="card border-dark" id="holidays/new" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-gifts fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">New Holiday</h6>
              <p className="card-text">Add a new Holiday!</p>
            </div>
          </div>
          <div className="card border-dark bg-success" id="holidays" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-skating fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Holidays</h6>
              <p className="card-text">Your Holiday Events!</p>
            </div>
          </div>
          <div className="card border-dark" id="holidays/:id/edit" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-pen-square fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Edit Holiday</h6>
              <p className="card-text">Change your Holiday!</p>
            </div>
          </div>
        </div>
        <div className="card-deck mt-3">
          <div className="card border-dark" id="holidays/:id" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-list-alt fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Holiday Detail</h6>
              <p className="card-text">See Holiday Details</p>
            </div>
          </div>
          <div className="card border-dark" id="holidays/:id/friends" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-users fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Holiday Friends</h6>
              <p className="card-text">Invite friends to your Holiday Event</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Holidays;
