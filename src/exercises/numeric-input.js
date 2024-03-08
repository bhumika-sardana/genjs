/*
* Numeric Input Component
*   HTML (initial state): <input type="text" class="c-numeric-input" />
*   Requirement:
*   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
*   - if user enters leading zero, or .  when user moves focus away from the input, it should
*     change to correct format:
*       .1 ==> 0.1 and 01 => 1
*   - if user enter invalid character/value, HTML should change to this
*       <input type="text" class="c-numeric-input c-numeric-input--error" />
*       <span class="c-numeric-input__error-msg">invalid input</span>
*   - if user enter valid value and move focus away from the input HTML should change to this:
*       <input type="text" class="c-numeric-input c-numeric-input--valid" />
*   - if user focus on the input or user clear value from the input,
*     HTML should return to initial stage
*
* Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
* red or green border to the input
* */

const NumericInput = {
  init: () => {
    document.querySelectorAll('.c-numeric-input').forEach(input => {
      input.addEventListener('input',NumericInput.getInput);
      input.addEventListener('focus',NumericInput.getFocus);
      input.addEventListener('blur',NumericInput.getBlur);
    });
  },

  getInput: (event) => {
    const input=event.target;
    let value = input.value.trim();

    //case 1: user enters leading zero
    if (value.startsWith('0') && value.length > 1 && value[1] !== '.'){
      value=value.replace(/^0+/, '');
    }
    //case 2: user enters .
    if(value.startsWith('.')){
      value= '0' + value;
    }
    
    //update input value
    input.value=value;
  },

  getFocus: (event) =>{
    const input=event.target;
    input.classList.remove('c-numeric-input--error','c-numeric-input--valid');
  },

  getBlur: (event) =>{
    const input=event.target;
    let value=input.value.trim();

    if(value === '' || isNaN(parseFloat(value))) {
      input.classList.add('c-numeric-input--error');

      //check if invalid input error msg already exist
      let invalidError=input.nextElementSibling;
      if(!invalidError || !invalidError.classList.contains('c-numeric-input__error-msg')){
        //create a new span for error message
      invalidError=document.createElement('span');
      invalidError.classList.add('c-numeric-input__error-msg');
      invalidError.innerHTML = ' Invalid Input';

      //insert after input element
      input.insertAdjacentElement('afterend', invalidError);
      }
      
    }
    else {
      input.classList.remove('c-numeric-input--error');
      input.classList.add('c-numeric-input--valid');
      input.nextElementSibling.innerHTML = '';
    }
  }
};

document.addEventListener('DOMContentLoaded', NumericInput.init);
