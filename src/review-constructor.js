'use strict';
var review = require('./review.js');
var Review = function(data) {
  var self = this;
  this.data = data;
  this.element = review.showFeedback;
  this.answerYes = document.querySelector('.review-quiz-answer-yes');
  this.answerNo = document.querySelector('.review-quiz-answer-no');
  this.answerYes.onclick = function() {
    self.clickYes();
  };
  this.answerNo.onclick = function() {
    self.clickNo();
  };
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

