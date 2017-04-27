import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startServer, stopServer } from '../models/status';

class StatusBar extends Component {
  render() {
    const { status, playersOnline, playersTotal, actions } = this.props;

    let buttonTitle;
    let onButtonClick;
    if (status === 'online') {
      buttonTitle = 'Stop';
      onButtonClick = actions.stopServer;
    } else {
      buttonTitle = 'Start';
      onButtonClick = actions.startServer;
    }

    let playerStatus;
    if (status === 'online') {
      playerStatus = <p className="status-bar__info">Players: {playersOnline} ({playersTotal})</p>;
    }
    return (
      <div className="status-bar">
        <h2 className="status-bar__title">Status: <span>{ status }</span></h2>
        { playerStatus }
        <button className="status-bar__button" onClick={e => onButtonClick(e)}>
          { buttonTitle }
        </button>
      </div>
    );
  }
}

StatusBar.propTypes = {
  status: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  playersOnline: PropTypes.number,
  playersTotal: PropTypes.number,
};

StatusBar.defaultProps = {
  playersOnline: 0,
  playersTotal: 0,
};

const mapStateToProps = state => ({
  ...state.serverStatus,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      stopServer,
      startServer,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
