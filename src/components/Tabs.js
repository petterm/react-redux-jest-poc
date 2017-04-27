import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabButton from './TabButton';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: props.status === 'online' ? -1 : 0,
    };
  }

  render() {
    const { panels } = this.props;

    const buttons = panels.map((tabPanel, index) => (
      <TabButton
        key={tabPanel.name}
        name={tabPanel.name}
        active={index === this.state.selectedTabIndex}
        onClick={() => this.setState({ selectedTabIndex: index })}
      />
    ));

    const selectedTabPanel = this.state.selectedTabIndex !== -1 ?
      panels[this.state.selectedTabIndex].content : undefined;

    return (
      <div className="tabs">
        <div className="tabs__buttons">{ buttons }</div>
        <div className="tabs__content">{ selectedTabPanel }</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  status: PropTypes.string.isRequired,
  panels: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  status: state.serverStatus.status,
  ...ownProps,
});

export default connect(mapStateToProps)(Tabs);
