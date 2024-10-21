export default function() {
  const formWrapper = document.querySelector('.form-registration--material');

  if(!formWrapper) return;

  const bntClear = formWrapper.querySelector('[data-clear]');
  const bntNext = formWrapper.querySelector('.form-registration__btn-registration');

  bntNext.addEventListener('click', function (e) {
    e.preventDefault();

    const inputs = formWrapper.querySelectorAll('[data-must-validate]');
    inputs.forEach(item => {
      if (item.closest('.hidden')) return;

      if (item.tagName === 'INPUT') {
        if (item.type === 'text') {
          const textLength = item.value.split('').length;
          if (textLength < 2) {
            const error = item.closest('.form-registration__form-label').querySelector('.error');
            if (!error) {
              addError(item, ['Введите текст', 'Enter text'])
            }
          } else {
            deleteError(item);
          }
        }

        if(item.type === 'email') {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(!reg.test(item.value)) {
                const error = item.closest('.form-registration__form-label').querySelector('.error');
                if(!error) {
                    addError(item, ['Некорректный формат', 'Incorrect format'])
                }
            } else {
                deleteError(item);
            }
        }

        if (item.type === 'number' || item.type === 'tel') {
          const textLength = item.value.split('').length;
          if (textLength < 1) {
            const error = item.closest('.form-registration__form-label').querySelector('.error');
            if (!error) {
              addError(item, ['Введите число', 'Enter a number'])
            }
          } else {
            deleteError(item);
          }
        }
      }

      if (item.className === 'form-registration__form-checkboxs') {
        const checkboxsInputs = item.querySelectorAll('input[type="radio"]');
        let newArray = [];
        checkboxsInputs.forEach(item => {
          newArray.push(item.checked);
        })
        if (!newArray.includes(true)) {
          const error = item.closest('.form-registration__form-label').querySelector('.error');
          if (!error) {
            addError(item, ['Выберите один вариант', 'Choose one option'])
          }
        } else {
          deleteError(item);
        }
      }

      if (item.tagName === 'SELECT') {
        if (item.value === 'Выбрать из списка') {
          const error = item.closest('.form-registration__form-label').querySelector('.error');
          if (!error) {
            addError(item, ['Выберите ответ', 'Choose an answer'])
          }
        } else {
          deleteError(item)
        }
      }
    });

    const errorElements = formWrapper.querySelectorAll('.error');
    if (errorElements.length === 0) {

      if (bntNext.classList.contains('form-registration__btn-registration')) {
        bntNext.classList.add('registration-success');

        let atrb = bntNext.querySelector('use').getAttribute('xlink:href');
        bntNext.querySelector('use').setAttribute('xlink:href', atrb.replace('icon__angle-small-right-white', 'icon__refresh'));
      }
    } else {

      if (bntNext.classList.contains('form-registration__btn-registration')) {
        bntNext.classList.remove('registration-success')

        let atrb = bntNext.querySelector('use').getAttribute('xlink:href');
        bntNext.querySelector('use').setAttribute('xlink:href', atrb.replace('icon__refresh', 'icon__angle-small-right-white'));
      }
    }
  });

  bntClear.addEventListener('click', function (e) {
    e.preventDefault();
    const inputs = formWrapper.querySelectorAll('[data-must-validate]');
    inputs.forEach(item => {
      inputClearingConditions(item);
      deleteError(item);
    });

    function clearInputFile() {
      const textRecomend = document.querySelector('.form-registration__dropzone-recomen');
      const text = document.querySelector(".form-registration__dropzone-file-name");

      textRecomend.style.display = 'block';
      text.style.display = 'none';
    };
    clearInputFile();


    const inputsNoValidate = formWrapper.querySelectorAll('[data-no-must-validate]');
    inputsNoValidate.forEach(item => {
      inputClearingConditions(item);
    });
  })

  function inputClearingConditions(item) {
    if (item.tagName === 'INPUT') {
      item.value = '';
    }

    if (item.tagName === 'TEXTAREA') {
      item.value = '';
    }

    if (item.className === 'form-registration__form-checkboxs') {
      const checkboxsInputs = item.querySelectorAll('input[type="radio"]');
      let newArray = [];
      checkboxsInputs.forEach(item => {
        item.checked = false;
      })
    }

    if (item.tagName === 'SELECT') {
      window.tisbiNaukaApi.update()
    }
  }



  function validateInputsIndividually() {
    const inputs = formWrapper.querySelectorAll('[data-must-validate]');
    inputs.forEach(item => {
      if (item.tagName === 'INPUT') {
        if (item.type === 'text') {
          item.addEventListener('input', function () {
            const textLength = item.value.split('').length;
            if (textLength < 2) {
              const error = item.closest('.form-registration__form-label').querySelector('.error');
              if (!error) {
                addError(item, ['Введите текст', 'Enter text'])
              }
            } else {
              deleteError(item);
            }
          })
        }

        if(item.type === 'email') {
            item.addEventListener('input', function(){
                var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if(!reg.test(item.value)) {
                    const error = item.closest('.form-registration__form-label').querySelector('.error');
                    if(!error) {
                        addError(item, ['Некорректный формат', 'Incorrect format'])
                    }
                } else {
                    deleteError(item);
                }
            })
        }

        if (item.type === 'number' || item.type === 'tel') {
          item.addEventListener('input', function () {
            const textLength = item.value.split('').length;
            if (textLength < 1) {
              const error = item.closest('.form-registration__form-label').querySelector('.error');
              if (!error) {
                addError(item, ['Введите число', 'Enter a number'])
              }
            } else {
              deleteError(item);
            }
          })
        }
      }

      if (item.className === 'form-registration__form-checkboxs') {
        const checkboxsInputs = item.querySelectorAll('input[type="radio"]');
        checkboxsInputs.forEach(item => {
          item.addEventListener('change', function () {
            deleteError(item);
            showHiddenLabel(item);
          })
        })
      }

      if (item.tagName === 'SELECT') {
        item.addEventListener('change', function () {
          if (item.value === 'Выбрать из списка') {
            const error = item.closest('.form-registration__form-label').querySelector('.error');
            if (!error) {
              addError(item, ['Выберите ответ', 'Choose an answer'])
            }
          } else {
            deleteError(item)
          }
        });
      }
    });
  }

  validateInputsIndividually();


  const langValue = document.querySelector('html').attributes.lang.value;

  function addError(item, arrayText) {

    let text = '';

    if (langValue === 'ru') {
      text = arrayText[0];
    }

    if (langValue === 'en') {
      text = arrayText[1];
    }

    item.closest('.form-registration__form-label').insertAdjacentHTML('beforeend', `
            <span class="error">
                <span class="error__text-wrapper">
                    <span class="error__text">${text}</span>
                </span>
            </span>
        `);
  }


  function deleteError(item) {
    const error = item.closest('.form-registration__form-label').querySelector('.error');
    if (error) {
      error.remove();
    }
  }

  function changeInput(elem) {
    const box = elem.querySelector('[data-must-validate]');
    inputClearingConditions(box);
  }

  function clickBtnsErrorWindow() {
    const btn = formWrapper.querySelector('.form-registration__error-back');
    btn.addEventListener('click', function () {
      console.log('dewifiewh');
      const btnRegistration = formWrapper.querySelector('.form-registration__btn-registration');
      btnRegistration.classList.remove('registration-success');
      let atrb = btnRegistration.querySelector('use').getAttribute('xlink:href');
      btnRegistration.querySelector('use').setAttribute('xlink:href', atrb.replace('icon__refresh', 'icon__angle-small-right-white'));
    })
  }

  clickBtnsErrorWindow();
}
