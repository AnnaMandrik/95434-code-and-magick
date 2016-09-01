'use strict';

var reviews;
var reviewsFilter = document.querySelector('.reviews-filter');
var reviewTemplate = document.querySelector('#review-template');
var reviewList = document.querySelector('.reviews-list');
var elementToClone = (reviewTemplate.content || reviewTemplate).querySelector('.review');

reviewsFilter.classList.add('invisible');

/**if ('content' in reviewTemplate) {
 +  elementToClone = reviewTemplate.content.querySelector('.review');
 +} else {
 +  elementToClone = reviewTemplate.querySelector('.review');
 +}**/
function parseReviews() {
  console.log(reviews);
}
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
createCallback('http://localhost:1506/api/reviews', function(data) {
  reviews = data;
  parseReviews(reviews);
  reviews.forEach(function(review) {
    showFeedback(review, reviewList);
  });
});
function showFeedback(review, container) {
  var element = elementToClone.cloneNode(true);
  var WIDTH_ONE_STAR = 40;
  var IMAGE_LOAD_TIMEOUT = 10000;
  var authorPictureTimeout;
  var authorPicture = new Image(124, 124);
  element.querySelector('.review-author').title = review.author.name;
  element.querySelector('.review-author').alt = review.author.name;
  element.querySelector('.review-rating').style.width = (review.rating * WIDTH_ONE_STAR) + 'px';
  authorPicture.onload = function(event) {
    clearTimeout(authorPictureTimeout);
    element.querySelector('.review-author').src = event.target.src;
  };

  authorPicture.onerror = function() {
    element.classList.add('review-load-failure');
  };
  authorPictureTimeout = setTimeout(function() {
    authorPicture.src = '';
    authorPicture.onerror();
  }, IMAGE_LOAD_TIMEOUT);
  authorPicture.src = review.author.picture;
  element.querySelector('.review-text').textContent = review.description;
  element.querySelector('.review-quiz').title = review.review_usefulness;
  container.appendChild(element);
  return element;
}
reviewsFilter.classList.remove('invisible');


