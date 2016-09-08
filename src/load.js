'use strict';
var createCallback = function(url, callback) {
  window.JSONPCallback = function(data) {
    if (typeof callback === 'function') {
      callback(data);
    }
  };
  var scriptTag = document.createElement('script');
  scriptTag.src = url + '?callback=JSONPCallback';
  document.body.appendChild(scriptTag);
};
module.exports = createCallback;

