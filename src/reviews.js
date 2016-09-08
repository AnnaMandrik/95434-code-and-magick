'use strict';

var load = require('./load');
var review = require('./review');
var reviews;
var reviewsFilter = document.querySelector('.reviews-filter');
var reviewList = document.querySelector('.reviews-list');
reviewsFilter.classList.add('invisible');
createCallback('http://localhost:1506/api/reviews', function(data) {
  reviews = data;
  renderReviewsList(reviews);
});
var renderReviewsList = function(reviews) {
  reviews.forEach(function(review) {
    showFeedback(review, reviewList);
  });
};
reviewsFilter.classList.remove('invisible');
module.exports = renderReviewsList();



