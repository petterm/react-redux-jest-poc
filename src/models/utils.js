export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  if (argNames.length > 0) {
    action.payload = {};
    argNames.forEach((arg, index) => {
      action.payload[argNames[index]] = args[index];
    });
  } else if (typeof args[0] !== 'undefined') {
    action.payload = args[0];
  }
  return action;
};

export const handleFetchErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
