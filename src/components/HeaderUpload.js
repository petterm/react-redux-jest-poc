import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderUpload extends Component {
  handleFileUpload({ files }) {
    const file = files[0];
    this.props.onUpload(file);
  }

  render() {
    const { title } = this.props;
    return (
      <input
        type="file"
        className="header-button"
        onChange={this.handleFileUpload}
        title={title}
      />
    );
  }
}

HeaderUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  title: PropTypes.string,
};

HeaderUpload.defaultProps = {
  title: 'Upload file',
};

export default HeaderUpload;
