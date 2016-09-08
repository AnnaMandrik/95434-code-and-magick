'use strict';

var load = require('./load.js');
var review = require('./review.js');
var reviews = require('./reviews.js');
reviews.createCallback();
reviews.showFeedback();
var reviewsFilter = document.querySelector('.reviews-filter');
var reviewList = document.querySelector('.reviews-list');
reviewsFilter.classList.add('invisible');
createCallback('http://localhost:1506/api/reviews', function(data) {
  reviews = data;
  renderReviewsList(reviews);
});
var renderReviewsList = function(reviews) {
  reviews.forEach(function (review) {
    showFeedback(review, reviewList);
  });
};
reviewsFilter.classList.remove('invisible');




