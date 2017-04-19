import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonRow extends Component {
  render() {
    const { title, buttonData } = this.props;
    const buttons = buttonData.map(button => (
      <Button
        key={button.key}
        onClick={button.onClick}
        icon={button.icon}
        title={button.title}
      />
    ));
    return (
      <div>
        <p className="row-title">{ title }</p>
        <div className="row-right-content">{ buttons }</div>
      </div>
    );
  }
}

ButtonRow.propTypes = {
  title: PropTypes.string.isRequired,
  buttonData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ButtonRow;
