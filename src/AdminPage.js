import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './models/store';
import StatusBar from './components/StatusBar';
import Tabs from './components/Tabs';
import Saves from './components/Saves';
import Config from './components/Config';
import Console from './components/Console';
import Players from './components/Players';

import './AdminPage.css';

const store = configureStore();

class AdminPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="admin-page-wrapper">
          <div className="admin-page__top">
            <StatusBar />
            <Tabs
              panels={[
                {
                  name: 'Saves',
                  content: <Saves />,
                },
                {
                  name: 'Server configuration',
                  content: <Config />,
                },
                {
                  name: 'Server console',
                  content: <Console />,
                },
              ]}
            />
          </div>
          <div className="admin-page-containers-wrapper">
            <Players />
            {/* <Mods /> */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default AdminPage;
