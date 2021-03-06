module.exports = (function() {
	// Use the native lad if he's available
	if ( Object.getPrototypeOf ) {
		return Object.getPrototypeOf;
	}
	else {
		return _getPrototypeOf;
	}
})();

function _getPrototypeOf( object ) {
  var proto = object.__proto__;
  
  if (proto || proto === null) {
    return proto;
  } else if (object.constructor) {
    return object.constructor.prototype;
  } else {
    return Object.prototype;
  }
}