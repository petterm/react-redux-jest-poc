import React, { Component } from 'react';
import Container from './Container';
import Header from './Header';
import List from './List';
import Row from './Row';

class Players extends Component {
  render() {
    const playerData = [
      { username: 'leonardo' },
      { username: 'donatello' },
      { username: 'raphael' },
      { username: 'michelangelo' },
    ];

    const players = playerData.map(player => {
      return <Row title={player.username} key={player.username} />;
    });

    return (
      <Container> {/* minimized, hidden, options */}
        <Header title={'Players'} />
        <List>
          { players }
        </List>
      </Container>
    );
  }
}

export default Players;

