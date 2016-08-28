'use strict';


var createCallback = function(url, callback) {
  window.JSONPCallback = function (data) {
    if (typeof callback === 'function') {
      callback(data);
    }
  };
  var scriptTag = document.createElement('script');
  scriptTag.src = url + '?callback=JSONPCallback';
  document.body.appendChild(scriptTag);
}();
(function() {
  var reviewsUrl = 'http://localhost:1506/api/reviews';
  if (reviewsUrl, JSONPCallback() ) {
      var reviews = data;
    };
})();


