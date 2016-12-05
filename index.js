/** ReactSymbol Function **/
var ReactSymbol = function() {
	this.returnText = '';
  this.toString = function(symbol) {
    if (typeof symbol === 'object' && symbol.$$typeof.toString() === 'Symbol(react.element)') {
      if (symbol.props.children && symbol.props.children.length) {
        Object.keys(symbol.props.children).forEach(function (key) {
          const childValue = symbol.props.children[key];
          switch (typeof childValue) {
            case 'string':
              this.returnText += childValue;
              break;
            case 'object':
              this.toString(childValue);
              break;
            default:
              console.warn('Neither object or value is in children props.', childValues)
          }
          return true;
        });
      }
    } else if (typeof symbol === 'string') {
      this.returnText += symbol;
      return this.returnText;
    }
    return this.returnText;
  };
}

module.exports = new ReactSymbol();
