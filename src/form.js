'use strict';


window.form = (function() {
  var formContainer = document.querySelector('.overlay-container');
  var formCloseButton = document.querySelector('.review-form-close');


  var form = {
    onClose: null,

    /**
     * @param {Function} cb
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


  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };


  return form;
})();

