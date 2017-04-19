import React, { Component } from 'react';
import StatusBar from './StatusBar';
import Players from './Players';

class AdminPage extends Component {
  render() {
    return (
      <div className="admin-page-wrapper">
        <StatusBar
          status={'online'} playersOnline={10} playersTotal={25}
          onStop={() => console.log('Stop server')}
          onStart={() => console.log('Start server')}
        />
        <div className="admin-page-containers-wrapper">
          <Players />
        </div>
      </div>
    );
  }
}

export default AdminPage;
