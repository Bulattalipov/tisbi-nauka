import Choices from "choices.js";

export default function choicesSelectForm() {
  const forms = document.querySelectorAll('.form-registration__form');

  if(forms.length === 0) return;

  forms.forEach(form => {
    const elements = form.querySelectorAll('.form-registration__form-select');

    elements.forEach(elem => {
      const select = new Choices(elem, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholder: true,
      });

      function update() {
        select.destroy();
        select.init();
      }

      
      window.tisbiNaukaApi.update = update;
    })
  });
}