'use strict';


var createCallback = function(url, callback) {
  var url = 'http://localhost:1506/api/reviews';
  window.JSONPCallback = function (data) {
    if (typeof callback === 'function') {
      callback(data);
    }
  };
  var scriptTag = document.createElement('script');
  scriptTag.src = url + '?callback=JSONPCallback';
  document.body.appendChild(scriptTag);
};
(function() {
  if (createCallback()) {
      var reviews = data;
    }
})();


