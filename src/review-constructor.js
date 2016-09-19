'use strict';

var reviewTemplate = document.querySelector('#review-template');
var elementToClone = (reviewTemplate.content || reviewTemplate).querySelector('.review');
var Review = function(data, container) {
  var element = elementToClone.cloneNode(true);
  var self = this;
  this.data = data;
  this.element = element;
  this.answerYes = element.querySelector('.review-quiz-answer-yes');
  this.answerNo = element.querySelector('.review-quiz-answer-no');
  var reviewAuthor = element.querySelector('.review-author');
  var WIDTH_ONE_STAR = 40;
  var IMAGE_LOAD_TIMEOUT = 10000;
  var authorPictureTimeout;
  var authorPicture = new Image(124, 124);
  reviewAuthor.title = data.author.name;
  reviewAuthor.alt = data.author.name;
  element.querySelector('.review-rating').style.width = (data.rating * WIDTH_ONE_STAR) + 'px';
  authorPicture.onload = function(event) {
    clearTimeout(authorPictureTimeout);
    reviewAuthor.src = event.target.src;
  };
  authorPicture.onerror = function() {
    element.classList.add('review-load-failure');
  };
  authorPictureTimeout = setTimeout(function() {
    authorPicture.src = '';
    authorPicture.onerror();
  }, IMAGE_LOAD_TIMEOUT);
  authorPicture.src = data.author.picture;
  element.querySelector('.review-text').textContent = data.description;
  element.querySelector('.review-quiz').title = data.data_usefulness;
  container.appendChild(element);
  this.answerYes.onclick = function() {
    self.clickYes();
  };
  this.answerNo.onclick = function() {
    self.clickNo();
  };
  return element;
};

Review.prototype.clickYes = function() {
  this.answerYes.classList.add('review-quiz-answer-active');
  this.answerNo.classList.remove('review-quiz-answer-active');
};
Review.prototype.clickNo = function() {
  this.answerYes.classList.remove('review-quiz-answer-active');
  this.answerNo.classList.add('review-quiz-answer-active');
};
Review.prototype.remove = function() {
  this.answerYes.onclick = null;
  this.answerNo.onclick = null;
};

module.exports = Review;

