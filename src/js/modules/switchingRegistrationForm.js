import gsap from 'gsap';

export default function () {
  const formWrappers = document.querySelectorAll('.form-registration');
  if (formWrappers.length === 0) return;

  formWrappers.forEach(formWrapper => {
    if(formWrapper.classList.contains('form-registration--material')) return;

    const bntPrev = formWrapper.querySelector('[data-prev]');
    const bntClear = formWrapper.querySelector('[data-clear]');
    const bntNextArray = formWrapper.querySelectorAll('[data-next]');

    const addText = formWrapper.querySelector('.form-registration__text');

    let currentStep = 1;
    let buttonState = true;

    const formBoxs = formWrapper.querySelectorAll('.form-registration__form-box');

    formBoxs.forEach(item => {
      gsap.to(item, {
        height: '0',
        opacity: 0,
        display: 'none',
        duration: 0,
      })
    })

    gsap.to(formBoxs[0], {
      height: 'auto',
      opacity: 1,
      display: 'flex',
      duration: 0.3,
    })


    const steps = formWrapper.querySelectorAll('.form-registration__step');

    gsap.to(steps[0], {
      width: '100%',
      duration: 0.4
    })

    if(steps.length > 2) {
      gsap.to(steps[1], {
        width: '130px',
        duration: 0.4
      })
    }



    bntPrev.addEventListener('click', function (e) {
      e.preventDefault();
      const steps = formWrapper.querySelectorAll('.form-registration__step');
      if (currentStep !== 1) {
        const stepsClass = formWrapper.querySelector('.form-registration__steps');
        currentStep--;

        if(steps.length > 2) {
          if (currentStep === 2) {
            gsap.to(steps[1], {
              width: '100%',
              duration: 0.5
            })

            gsap.to(steps[0], {
              width: '130px',
              duration: 0.5
            })
          }
        }

        if (currentStep === 1) {
          gsap.to(steps[0], {
            width: '100%',
            duration: 0.5
          })

          if(steps.length > 2) {
            gsap.to(steps[1], {
              width: '130px',
              duration: 0.5
            })

          }
        }

        steps[currentStep - 1].classList.remove('past-step');
        steps[currentStep - 1].classList.add('active-step');
        steps[currentStep].classList.remove('active-step');
        if (currentStep === steps.length - 1) {
          stepsClass.classList.remove('last-step');
          addText.style.height = '0px';

          formWrapper.querySelector('.form-registration__btn-next').style.display = 'flex';
          formWrapper.querySelector('.form-registration__btn-registration').style.display = 'none';
        }

        formBoxs.forEach(item => {
          gsap.to(item, {
            height: '0',
            opacity: 0,
            display: 'none',
            duration: 0,
          })
        })
        gsap.to(formBoxs[currentStep - 1], {
          height: 'auto',
          opacity: 1,
          display: 'flex',
          duration: 0.3,
        })

      }
      if (currentStep == 1) {
        bntPrev.style.display = 'none';
      }
    });

    bntNextArray.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        const inputs = formBoxs[currentStep - 1].querySelectorAll('[data-must-validate]');
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

            // if(item.type === 'email') {
            //     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //     if(!reg.test(item.value)) {
            //         const error = item.closest('.form-registration__form-label').querySelector('.error');
            //         if(!error) {
            //             addError(item, ['Некорректный формат', 'Incorrect format'])
            //         }
            //     } else {
            //         deleteError(item);
            //     }
            // }

            if (item.type === 'number') {
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

        const errorElements = formBoxs[currentStep - 1].querySelectorAll('.error');
        if (errorElements.length === 0) {
          buttonState = true;

          if (item.classList.contains('form-registration__btn-registration')) {
            item.classList.add('registration-success');

            let atrb = item.querySelector('use').getAttribute('xlink:href');
            item.querySelector('use').setAttribute('xlink:href', atrb.replace('icon__angle-small-right-white', 'icon__refresh'));
          }
        } else {
          buttonState = false;

          if (item.classList.contains('form-registration__btn-registration')) {
            item.classList.remove('registration-success')

            let atrb = item.querySelector('use').getAttribute('xlink:href');
            item.querySelector('use').setAttribute('xlink:href', atrb.replace('icon__refresh', 'icon__angle-small-right-white'));
          }
        }

        if (!buttonState) return;

        //скролл модального окна на верх
        const modal = document.querySelector('.modal');
        modal.scroll({
          top: 0,
          behavior: "smooth",
        });

        //конец скролл модального окна на верх

        const steps = formWrapper.querySelectorAll('.form-registration__step');
        if (currentStep !== steps.length) {
          const stepsClass = formWrapper.querySelector('.form-registration__steps');
          currentStep++;

          if(steps.length > 2) {
            if (currentStep === 2) {
              gsap.to(steps[1], {
                width: '100%',
                duration: 0.5
              })

              gsap.to(steps[0], {
                width: '130px',
                duration: 0.5
              })
            }
          }

          if (currentStep === 3) {
            gsap.to(steps[1], {
              width: '100%',
              duration: 0.5
            })

            gsap.to(steps[0], {
              width: '100%',
              duration: 0.5
            })
          }
          steps[currentStep - 2].classList.add('past-step');
          steps[currentStep - 2].classList.remove('active-step');
          steps[currentStep - 1].classList.add('active-step');
          if (currentStep === steps.length) {
            addText.style.height = '100%';
            formWrapper.querySelector('.form-registration__btn-next').style.display = 'none';
            formWrapper.querySelector('.form-registration__btn-registration').style.display = 'flex';
          }

          formBoxs.forEach(item => {
            gsap.to(item, {
              height: '0',
              opacity: 0,
              display: 'none',
              duration: 0,
            })
          })

          gsap.to(formBoxs[currentStep - 1], {
            height: 'auto',
            opacity: 1,
            display: 'flex',
            duration: 0.3,
          })

          bntPrev.style.display = 'flex';

        }
      });
    });

    bntClear.addEventListener('click', function (e) {
      e.preventDefault();
      const inputs = formBoxs[currentStep - 1].querySelectorAll('[data-must-validate]');
      inputs.forEach(item => {
        inputClearingConditions(item);
        deleteError(item);
      });


      const inputsNoValidate = formBoxs[currentStep - 1].querySelectorAll('[data-no-must-validate]');
      inputsNoValidate.forEach(item => {
        inputClearingConditions(item);
      });

      if (currentStep === 2) {
        const methodParticipation = formWrapper.querySelector('.form-registration__form-label--method-participation');
        const typeReport = formWrapper.querySelector('.form-registration__form-label--type-report');
        const topicReport = formWrapper.querySelector('.form-registration__form-label--topic-report');

        if(methodParticipation) {
          if (!methodParticipation.classList.contains('hidden')) {
            methodParticipation.classList.add('hidden')
          }
        }

        if(typeReport) {
          if (!typeReport.classList.contains('hidden')) {
            typeReport.classList.add('hidden')
          }
        }

        if(topicReport) {
          if (!topicReport.classList.contains('hidden')) {
            topicReport.classList.add('hidden')
          }
        }

      }

      if (currentStep === 3) {
        const numberCopies = formWrapper.querySelector('.form-registration__form-label--number-copies');

        if (!numberCopies.classList.contains('hidden')) {
          numberCopies.classList.add('hidden')
        }
      }
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

          // if(item.type === 'email') {
          //     item.addEventListener('input', function(){
          //         var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          //         if(!reg.test(item.value)) {
          //             const error = item.closest('.form-registration__form-label').querySelector('.error');
          //             if(!error) {
          //                 addError(item, ['Некорректный формат', 'Incorrect format'])
          //             }
          //         } else {
          //             deleteError(item);
          //         }
          //     })
          // }

          if (item.type === 'number') {
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


    function showHiddenLabel(elem) {
      const methodParticipation = formWrapper.querySelector('.form-registration__form-label--method-participation');
      const typeReport = formWrapper.querySelector('.form-registration__form-label--type-report');
      const topicReport = formWrapper.querySelector('.form-registration__form-label--topic-report');
      const numberCopies = formWrapper.querySelector('.form-registration__form-label--number-copies');

      if (elem.closest('.form-registration__form-label--form-participation')) {
        if (elem.parentElement.attributes['data-open-next']) {
          methodParticipation.classList.remove('hidden');
        } else {
          methodParticipation.classList.add('hidden');
          deleteError(methodParticipation);
          changeInput(methodParticipation);

          if (!typeReport.classList.contains('hidden')) {
            typeReport.classList.add('hidden');
            deleteError(typeReport);
            changeInput(typeReport)
          }

          if (!topicReport.classList.contains('hidden')) {
            topicReport.classList.add('hidden');
            deleteError(topicReport);
            changeInput(topicReport);
          }
        }
      }

      if (elem.closest('.form-registration__form-label--method-participation')) {
        if (elem.parentElement.attributes['data-open-next']) {
          typeReport.classList.remove('hidden');
          topicReport.classList.remove('hidden');
        } else {
          typeReport.classList.add('hidden');
          deleteError(typeReport);
          changeInput(typeReport);

          topicReport.classList.add('hidden');
          deleteError(topicReport);
          changeInput(topicReport);
        }
      }

      if (elem.closest('.form-registration__form-label--printed-copy')) {
        if (elem.parentElement.attributes['data-open-next']) {
          numberCopies.classList.remove('hidden');
        } else {
          numberCopies.classList.add('hidden');
          deleteError(numberCopies);
          changeInput(numberCopies);
        }
      }
    };

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
  })
}
