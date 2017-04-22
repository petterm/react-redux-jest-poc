import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderButton extends Component {
  render() {
    const { icon, onClick, title } = this.props;
    return (
      <button
        className="header-button"
        onClick={e => onClick(e)}
        title={title}
      >{ icon }</button>
    );
  }
}

HeaderButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

HeaderButton.defaultProps = {
  title: '',
};

export default HeaderButton;
