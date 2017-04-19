import React, { Component } from 'react';
import Container from './Container';
import Header from './Header';
import List from './List/List';
import ButtonRow from './List/ButtonRow';

const playerRow = (player, banPlayer) => {
  const buttons = [
    {
      key: 'banPlayer',
      onClick: () => banPlayer(player.username),
      title: 'Ban player',
    },
  ];

  return (
    <ButtonRow
      key={player.username}
      title={player.username}
      buttonData={buttons}
    />
  );
};


class Players extends Component {
  render() {
    const playerData = [
      { username: 'leonardo' },
      { username: 'donatello' },
      { username: 'raphael' },
      { username: 'michelangelo' },
    ];

    const banPlayer = username => () => {
      console.log('Ban player', username);
    };

    return (
      <Container> {/* minimized, hidden, options */}
        <Header title={'Players'} />
        <List>
          { playerData.map(player => playerRow(player, banPlayer(player))) }
        </List>
      </Container>
    );
  }
}

export default Players;

