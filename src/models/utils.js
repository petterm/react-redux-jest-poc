export default function makeActionCreator(type, ...argNames) {
  return (...args) => {
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
}
