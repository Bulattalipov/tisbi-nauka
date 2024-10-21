export default function() {
  const fileBox = document.querySelectorAll(".form-registration__dropzone");

  if(!fileBox) return;

  fileBox.forEach(item => {
    const fileBoxInner = item.querySelector(".form-registration__dropzone-inner");
    const textRecomend = item.querySelector('.form-registration__dropzone-recomen');
    const input = item.querySelector("input");
    const text = item.querySelector(".form-registration__dropzone-file-name");

    input.addEventListener('change', () => {
      fileCheck();
    });

    if(window.matchMedia('(min-width: 1024px)').matches) {
      ["dragover", "drop"].forEach(function(event) {
        document.addEventListener(event, function(evt) {
          evt.preventDefault()
          return false
        })
      })

      item.addEventListener("dragenter", function() {
        item.classList.add("active")
      })

      item.addEventListener("dragleave", function(e) {
        e.preventDefault();
        if (!e.target.closest('.form-registration__dropzone').contains(e.relatedTarget)) {
          item.classList.remove("active");
        }
      })

      item.addEventListener('drop', (e) => {
        item.classList.remove("active")
        e.preventDefault();
        input.files= e.dataTransfer?.files;

        fileCheck();
      });
    }


    function fileCheck() {
      const maxSize = input.dataset.maxSize;
      let result = null;
      if(input.files[0]) {
        result = input.files[0].size <= maxSize * 1024 * 1024;
      }
      if(!result) {
        input.value = "";
        textRecomend.style.display = 'block';
        text.style.display = 'none'
        textRecomend.classList.add('anime');
        setTimeout(() => {
          textRecomend.classList.remove('anime');
        }, 1000);
      }

      if(input.value === '') {
        textRecomend.style.display = 'block';
        text.style.display = 'none';
      } else {
        const fileName = input.files[0].name;
        textRecomend.style.display = 'none';
        text.style.display = 'flex';
        text.textContent = fileName;
      }
    }
  });




}
