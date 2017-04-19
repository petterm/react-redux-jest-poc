import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderButton extends Component {
  render() {
    const { icon, onClick } = this.props;
    return (
      <button className="header-button" onClick={e => onClick(e)}>{ icon }</button>
    );
  }
}

HeaderButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeaderButton;
