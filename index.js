let returnText = '';
const ReactSymbolToString = (symbol) => {
  if (typeof symbol === 'object' && symbol.$$typeof.toString() === 'Symbol(react.element)') {
    if (symbol.props.children && symbol.props.children.length) {
      Object.keys(symbol.props.children).forEach((key) => {
        const childValue = symbol.props.children[key];
        switch (typeof childValue) {
          case 'string':
            returnText += childValue;
            break;
          case 'object':
            ReactSymbolToString(childValue);
            break;
          default:
            console.warn('Neither object or value is in children props.', childValues)
        }
        return true;
      });
    }
  } else if (typeof symbol === 'string') {
    returnText += symbol;
    return returnText;
  }
  return returnText;
};

module.exports = ReactSymbolToString;
