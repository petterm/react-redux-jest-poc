import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabButton extends Component {
  render() {
    const { name, active, onClick } = this.props;
    const activeClass = active ? 'tab-button-active' : '';
    return (
      <button className={`tab-button ${activeClass}`} onClick={onClick}>{ name }</button>
    );
  }
}

TabButton.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButton;
