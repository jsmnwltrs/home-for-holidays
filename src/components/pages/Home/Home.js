import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.target.closest('.card').id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className="Home mx-auto">
        <div className="card-deck mt-3">
          <div className="card border-dark" id="friends" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-user-friends fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
              <p className="card-text">Your Lame Friends</p>
            </div>
          </div>
          <div className="card border-dark bg-success" id="home" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-holly-berry fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Home for the Holidays</h6>
              <p className="card-text">Welcome!</p>
            </div>
          </div>
          <div className="card border-dark" id="holidays" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-skating fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Holidays</h6>
              <p className="card-text">Your Holiday Events</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
