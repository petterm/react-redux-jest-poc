import React, { Component } from 'react';
import Container from './Container';
import Header from './Header';
import List from './List/List';
import ConfigRow from './List/ConfigRow';

const configRow = (option, onChangeThunk) => (
  <ConfigRow
    key={option.name}
    title={option.title}
    description={option.description}
    type={option.type}
    value={option.value}
    defaultValue={option.defaultValue}
    onChange={onChangeThunk(option.name)}
  />
);

class Config extends Component {
  render() {
    const configOptions = [{
      name: 'autosave_interval',
      title: 'Autosave interval',
      description: 'Autosave interval in minutes',
      type: 'number',
      value: 10,
      defaultValue: 10,
    }];

    const onChangeThunk = name => value => {
      console.log('Update config', name, value);
    };

    return (
      <Container> {/* minimized, hidden, options */}
        <Header title={'Server config'} />
        <List>
          { configOptions.map(option => configRow(option, onChangeThunk)) }
        </List>
      </Container>
    );
  }
}

export default Config;
