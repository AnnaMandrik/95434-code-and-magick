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
  var name= document.querySelector('#review-name');
  var text = document.querySelector('#review-text');
  var nameFields = document.querySelector('.review-fields-name');
  var formControls = document.querySelector('.review-fields');
  var buttons = document.querySelector('.review-submit');
  var mark = document.querySelector('.review-form-group-mark input[type=radio]:checked');

  function validateOnSubmit() {
    var valid= true;
    if (valid) {
      if (name.value) {
        name.setAttribute('required','text');
        nameFields.style.display = 'none';
      }
      if (mark.value){
        text.setAttribute('required','text');
        formControls.style.display = 'none';
      }
    }else {
      buttons.setAttribute('disabled', 'disabled');
    }
  }
   validateOnSubmit();
  name.onchange = validateOnSubmit;
  text.onchange = validateOnSubmit;
  mark.onchange = validateOnSubmit;

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };


  return form;
})();

