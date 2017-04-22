export const types = {
  CONFIG_UPDATE_VALUE: 'CONFIG_UPDATE_VALUE',
  CONFIG_SAVE: 'CONFIG_SAVE',
  CONFIG_SAVE_START: 'CONFIG_SAVE_START',
  CONFIG_SAVE_SUCCESS: 'CONFIG_SAVE_SUCCESS',
  CONFIG_SAVE_FAIL: 'CONFIG_SAVE_FAIL',
  CONFIG_REFRESH: 'CONFIG_REFRESH',
  CONFIG_UPLOAD_START: 'CONFIG_UPLOAD_START',
  CONFIG_UPLOAD_SUCCESS: 'CONFIG_UPLOAD_SUCCESS',
  CONFIG_UPLOAD_FAIL: 'CONFIG_UPLOAD_FAIL',
};

export const defaultOptions = {
  autosave_interval: {
    title: 'Autosave interval',
    description: 'Autosave interval in minutes',
    type: 'number',
    defaultValue: 10,
  },
  name: {
    title: 'Server name',
    description: 'Name of the factorio server',
    type: 'text',
    defaultValue: 'Default server',
  },
};
