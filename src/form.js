'use strict';

var browserCookies = require('browser-cookies');
var formContainer = document.querySelector('.overlay-container');
var formCloseButton = document.querySelector('.review-form-close');
var form = {
  onClose: null,
  /** @param {Function} cb
       */
  open: function(cb) {
    formContainer.classList.remove('invisible');
    cb();
  },

  close: function() {
    formContainer.classList.add('invisible');

    if (typeof this.onClose === 'function') {
      this.onClose();
    }
  }
};
var name = document.querySelector('#review-name');
var text = document.querySelector('#review-text');
var nameFields = document.querySelector('.review-fields-name');
var textFields = document.querySelector('.review-fields-text');
var formControls = document.querySelector('.review-fields');
var buttons = document.querySelector('.review-submit');

function validateOnSubmit() {
  var valid = true;
  var needFillTextField;
  var mark = document.querySelector('.review-form-group-mark input[type=radio]:checked');
  var markNumber = parseInt(mark.value, 10);
  needFillTextField = markNumber < 3;
  if (name.value) {
    nameFields.style.display = 'none';
  } else {
    nameFields.style.display = '';
    valid = false;
  }
  if (needFillTextField) {
    if (text.value) {
      textFields.style.display = 'none';
    } else {
      textFields.style.display = '';
      valid = false;
    }
  } else {
    textFields.style.display = 'none';
  }
  if (valid) {
    formControls.style.display = 'none';
    buttons.removeAttribute('disabled');
  } else {
    formControls.style.display = '';
    buttons.setAttribute('disabled', 'disabled');
  }
}
validateOnSubmit();
name.oninput = validateOnSubmit;
text.oninput = validateOnSubmit;
var marks = document.querySelector('.review-form-group-mark');
marks.onchange = validateOnSubmit;
var reviewForm = document.querySelector('.review-form');
reviewForm.onsubmit = (function() {
  var reviewMark = document.querySelector('input[name="review-mark"]:checked').value;
  var expireDays = function() {
    var current = new Date();
    var secondTime = 1000 * 60 * 60 * 24;
    var birthdayGraceHopper = new Date(current.getFullYear(), 11, 9);
    if (current < birthdayGraceHopper) {
      birthdayGraceHopper.setFullYear(current.getFullYear() - 1);
    }
    return Math.round((current - birthdayGraceHopper) / secondTime);
  };
  browserCookies.set('review-name', name.value, {expires: expireDays()});
  browserCookies.set('review-mark', reviewMark, {expires: expireDays()});
});
name.value = browserCookies.get('review-name') || name.value;
if (browserCookies.get('review-mark')) {
  var reviewMarkRadio = document.getElementById('review-mark-' + browserCookies.get('review-mark'));
  reviewMarkRadio.checked = true;
}

formCloseButton.onclick = function(evt) {
  evt.preventDefault();
  form.close();
};

module.exports = form;



