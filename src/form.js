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
  var name= document.querySelector('#review-name','value');
  var text = document.querySelector('#review-text');
  var nameFields = document.querySelector('.review-fields-name');
  var markFirst = document.querySelector('#review-mark-1');
  var markSecond = document.querySelector('#review-mark-2');
  var formControls = document.querySelector('.review-fields');
  var buttons = document.querySelector('.review-submit');

  function validateOnSubmit() {
    var valid = true;
    if (valid) {
      if (name) {
        name.setAttribute('value','');
        name.setAttribute('required','required');
        nameFields.style.display = 'none';
      }
      if (markFirst.getAttribute('checked') || markSecond.getAttribute('checked')){
        text.setAttribute('value','');
        text.setAttribute('required','required');
        formControls.style.display = 'none';
      }
    }else {
      result (false);
      buttons.setAttribute('disabled', 'disabled');
    }
  }
   validateOnSubmit();
  name.onchange = validateOnSubmit;
  text.onchange = validateOnSubmit;

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };


  return form;
})();

