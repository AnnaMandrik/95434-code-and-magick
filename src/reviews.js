'use strict';

var load = require('./load.js');
var Review = require('./review-constructor.js');
var reviewsFilter = document.querySelector('.reviews-filter');
var reviewList = document.querySelector('.reviews-list');
reviewsFilter.classList.add('invisible');
load.createCallback('http://localhost:1506/api/reviews', function(data) {
  var reviews = data;
  renderReviewsList(reviews);
});
var renderReviewsList = function(reviews) {
  reviews.forEach(function(reviewData) {
    var review = new Review();
    review(reviewData, reviewList);
  });
};
reviewsFilter.classList.remove('invisible');




