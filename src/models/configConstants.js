export const types = {
  CONFIG_UPDATE_VALUE: 'CONFIG_UPDATE_VALUE',
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
    value: 10,
    defaultValue: 10,
  },
  name: {
    title: 'Server name',
    description: 'Name of the factorio server',
    type: 'text',
    value: 'Default server',
    defaultValue: 'Default server',
  },
};
