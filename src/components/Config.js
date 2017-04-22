import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Container from './Container';
import Header from './Header';
import HeaderUpload from './HeaderUpload';
import List from './List/List';
import ConfigRow from './List/ConfigRow';
import { updateValue, uploadStart, uploadSuccess, uploadFail } from '../models/config';

const configRows = (options, onChangeThunk) => (
  Object.keys(options).map(optionName => {
    const option = options[optionName];
    return (
      <ConfigRow
        key={optionName}
        title={option.title}
        description={option.description}
        type={option.type}
        value={option.value}
        defaultValue={option.defaultValue}
        onChange={onChangeThunk(optionName)}
      />
    );
  })
);

const uploadConfig = file => {
  const data = new FormData();
  data.append('file', file);
  data.append('name', 'serverConfig');

  return dispatch => {
    dispatch(uploadStart());
    axios.post('/api/uploadConfig', data)
      .then(response => dispatch(uploadSuccess(response)))
      .catch(error => dispatch(uploadFail(error)));
  };
};

class Config extends Component {
  render() {
    const { actions, options, uploading, uploadFailed } = this.props;

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
          { configRows(options, onChangeThunk) }
        </List>
      </Container>
    );
  }
}

Config.propTypes = {
  actions: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
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
      uploadStart,
      uploadSuccess,
      uploadFail,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Config);
