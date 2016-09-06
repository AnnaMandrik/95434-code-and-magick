'use strict';

define([], function() {

  var reviewTemplate = document.querySelector('#review-template');
  var elementToClone = (reviewTemplate.content || reviewTemplate).querySelector('.review');
  function showFeedback(review, container) {
    var element = elementToClone.cloneNode(true);
    var reviewAuthor = element.querySelector('.review-author');
    var WIDTH_ONE_STAR = 40;
    var IMAGE_LOAD_TIMEOUT = 10000;
    var authorPictureTimeout;
    var authorPicture = new Image(124, 124);
    reviewAuthor.title = review.author.name;
    reviewAuthor.alt = review.author.name;
    element.querySelector('.review-rating').style.width = (review.rating * WIDTH_ONE_STAR) + 'px';
    authorPicture.onload = function (event) {
      clearTimeout(authorPictureTimeout);
      reviewAuthor.src = event.target.src;
    };

    authorPicture.onerror = function () {
      element.classList.add('review-load-failure');
    };
    authorPictureTimeout = setTimeout(function () {
      authorPicture.src = '';
      authorPicture.onerror();
    }, IMAGE_LOAD_TIMEOUT);
    authorPicture.src = review.author.picture;
    element.querySelector('.review-text').textContent = review.description;
    element.querySelector('.review-quiz').title = review.review_usefulness;
    container.appendChild(element);
    return element;
  }
  return showFeedback;
});

