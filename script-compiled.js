'use strict';

var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  return console.log('Hello ' + name + '!');
};
