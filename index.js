/** ReactSymbolToString */
function ReactSymbolToString(symbol){
  let priv = {};
  let pub = {};

  pub.returnText = '';

  priv.isSymbol = function(symbol) {
    return typeof symbol === 'object' && symbol.$$typeof.toString() === 'Symbol(react.element)';
  };

  priv.hasChildren = function(symbol) {
    return symbol.props.children && symbol.props.children.length
  };

  pub.getText = function(symbol) {
    if (priv.isSymbol(symbol)) {
      if (priv.hasChildren(symbol)) {

        Object.keys(symbol.props.children).forEach((key) => {
          const childValue = symbol.props.children[key];
          switch (typeof childValue) {
            case 'string':
              pub.returnText += childValue;
              break;
            case 'object':
              pub.getText(childValue);
              break;
            default:
              console.warn('Neither object or value is in children props.', childValues)
          }
          return true;
        });

      }
    } else if (typeof symbol === 'string') {
      return symbol;
    }

    return this.returnText;
  }

  return pub.getText(symbol);
};

module.exports = ReactSymbolToString;
