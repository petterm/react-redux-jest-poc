import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './models/store';
import StatusBar from './components/StatusBar';
import Players from './components/Players';
import Config from './components/Config';

import './AdminPage.css';

const store = configureStore();

class AdminPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="admin-page-wrapper">
          <StatusBar
            status={'online'} playersOnline={10} playersTotal={25}
            onStop={() => console.log('Stop server')}
            onStart={() => console.log('Start server')}
          />
          <div className="admin-page-containers-wrapper">
            <Players />
            <Config />
          </div>
        </div>
      </Provider>
    );
  }
}

export default AdminPage;
