'use strict';
define([], function() {
  var createCallback = function (url, callback) {
    window.JSONPCallback = function (data) {
      if (typeof callback === 'function') {
        callback(data);
      }
    };
    var scriptTag = document.createElement('script');
    scriptTag.src = url + '?callback=JSONPCallback';
    document.body.appendChild(scriptTag);
  };
  return createCallback;
  createCallback('http://localhost:1506/api/reviews', function (data) {
    reviews = data;
  });
});
