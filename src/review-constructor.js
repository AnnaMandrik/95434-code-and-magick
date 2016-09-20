'use strict';

var Review = function(data) {
  this.data = data;
  this.element = this.createReviewElement();
  this.answerYes = document.querySelector('.review-quiz-answer-yes');
  this.answerNo = document.querySelector('.review-quiz-answer-no');

};

Review.prototype.createReviewElement = function() {
  var reviewTemplate = document.querySelector('#review-template');
  var elementToClone = (reviewTemplate.content || reviewTemplate).querySelector('.review');
  var element = elementToClone.cloneNode(true);
  var reviewAuthor = element.querySelector('.review-author');
  var WIDTH_ONE_STAR = 40;
  var IMAGE_LOAD_TIMEOUT = 10000;
  var authorPictureTimeout;
  var authorPicture = new Image(124, 124);
  reviewAuthor.title = this.data.author.name;
  reviewAuthor.alt = this.data.author.name;
  element.querySelector('.review-rating').style.width = (this.data.rating * WIDTH_ONE_STAR) + 'px';
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
  authorPicture.src = this.data.author.picture;
  element.querySelector('.review-text').textContent = this.data.description;
  element.querySelector('.review-quiz').title = this.data.data_usefulness;
  return element;
};

Review.prototype.clickYes = function() {
  var self = this;
  this.answerYes.onclick = function() {
    self.clickYes();
  };
  this.answerYes.classList.add('review-quiz-answer-active');
  this.answerNo.classList.remove('review-quiz-answer-active');
};
Review.prototype.clickNo = function() {
  var self = this;
  this.answerNo.onclick = function() {
    self.clickNo();
  };
  this.answerYes.classList.remove('review-quiz-answer-active');
  this.answerNo.classList.add('review-quiz-answer-active');
};
Review.prototype.remove = function() {
  this.answerYes.onclick = null;
  this.answerNo.onclick = null;
};

module.exports = Review;

