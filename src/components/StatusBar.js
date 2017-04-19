import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatusBar extends Component {
  render() {
    const { status, playersOnline, playersTotal, onStop, onStart } = this.props;

    let buttonTitle;
    let onButtonClick;
    if (status === 'online') {
      buttonTitle = 'Stop';
      onButtonClick = onStop;
    } else {
      buttonTitle = 'Start';
      onButtonClick = onStart;
    }

    return (
      <div className="status-bar">
        <h2 className="status-bar__title">Status: <span>{ status }</span></h2>
        <p className="status-bar__info">Players: { playersOnline } ({ playersTotal })</p>
        <button className="status-bar__button" onClick={e => onButtonClick(e)}>
          { buttonTitle }
        </button>
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
