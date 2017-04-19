import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderButton from './HeaderButton';

class Header extends Component {
  render() {
    const { title, buttons } = this.props;
    return (
      <div>
        <h3 className="header-title">{ title }</h3>
        <div className="header-right">
          { buttons.map(button => <HeaderButton icon={button.icon} onClick={button.onClick} />) }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  buttons: [],
};

export default Header;
