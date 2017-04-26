import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './Container';
import Header from './Header';
import HeaderUpload from './HeaderUpload';
import List from './List/List';
import ConfigRow from './List/ConfigRow';
import { updateValue, save, upload } from '../models/config';

const configRows = (values, info, onChangeThunk) => (
  Object.keys(values).map(optionName => (
    <ConfigRow
      {...info[optionName]}
      value={values[optionName]}
      key={optionName}
      onChange={onChangeThunk(optionName)}
    />
  ))
);

const uploadConfig = file => {
  // foo
};

class Config extends Component {
  componentDidMount() {
    // Refresh data here?
  }

  render() {
    const { actions, optionValues, optionInfo, uploading, uploadFailed } = this.props;

    const onChangeThunk = name => value => {
      actions.updateValue(name, value);
    };

    const headerButtons = [
      <HeaderUpload
        key={'upload'}
        title={'Upload server config'}
        icon={'U'}
        onUpload={uploadConfig}
      />,
    ];

    let title = 'Server config';
    if (uploadFailed) {
      title = 'Upload failed!';
    }

    return (
      <Container> {/* minimized, hidden, options */}
        <Header title={title} buttons={headerButtons} />
        <List disabled={uploading}>
          { configRows(optionValues, optionInfo, onChangeThunk) }
        </List>
        <button onClick={() => actions.save(optionValues)}>Save</button>
      </Container>
    );
  }
}

Config.propTypes = {
  actions: PropTypes.object.isRequired,
  optionValues: PropTypes.object.isRequired,
  optionInfo: PropTypes.object.isRequired,
  uploading: PropTypes.bool.isRequired,
  uploadFailed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  ...state.serverConfig,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      updateValue,
      save,
      upload,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Config);
