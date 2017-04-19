import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatusBar extends Component {
  render() {
    const { status, playersOnline, playersTotal, onStop, onStart } = this.props;
    let button;
    if  (status === 'online') {
      button = <button onClick={e => onStop(e)}>Stop</button>;
    } else {
      button = <button onClick={e => onStart(e)}>Start</button>;
    }
    return (
      <div>
        <h2>Status: <span>{ status }</span></h2>
        <span>Players: { playersOnline } ({ playersTotal })</span>
        { button }
      </div>
    );
  }
}

StatusBar.propTypes = {
  status: PropTypes.string.isRequired,
  onStop: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  playersOnline: PropTypes.number,
  playersTotal: PropTypes.number,
};

StatusBar.defaultProps = {
  playersOnline: 0,
  playersTotal: 0,
};

export default StatusBar;
