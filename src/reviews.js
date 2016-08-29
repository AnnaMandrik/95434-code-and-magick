'use strict';

var url = 'http://localhost:1506/api/reviews';
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
var reviews;
(function(reviews) {
   createCallback(url, function(data){
      reviews(data);
  });
})();


