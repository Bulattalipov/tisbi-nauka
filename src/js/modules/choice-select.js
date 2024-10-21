import Choices from "choices.js";

export default function choicesSelect() {
  const selects = document.querySelectorAll('.choices-select');

  if(selects.length === 0) return;

  selects.forEach(elem => {
    if(!elem.classList.contains('choices-select--multi')) {
      const select = new Choices(elem, {
        allowHTML: true,
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholder: true,
      })
    } else {
      const select2 = new Choices(elem, {
        allowHTML: true,
        searchEnabled: false,
        itemSelectText: '',
        multiple: true,
        shouldSort: false,
        placeholder: true,
        removeItemButton: true
      })
    }
  });
}
