'use strict';

var getImagesSrc = function(images) {
  return [].map.call(images, function (image) {
    return image.src;
  });
};
module.exports = getImagesSrc;

