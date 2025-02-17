import AirDatepicker from 'air-datepicker';
import Sticky from "sticky-js";

export default function() {
    const calendar = document.querySelector('#el');
    if(!calendar) return;

    const inner = calendar.closest('.upcoming-events__inner')
    const lang = document.querySelector('html').getAttribute('lang');
    let langData = null;

    const hiddenBlock = inner.querySelector('.upcoming-events__hidden-block');

    if(lang === 'ru') {
      langData = {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
        daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsChanges: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        clear: 'Очистить',
        dateFormat: 'dd.MM.yyyy',
        timeFormat: 'HH:mm',
        firstDay: 1
      };
    } else {
      langData = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
        monthsChanges: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'mm/dd/yyyy',
        timeFormat: 'hh:ii aa',
        firstDay: 0
      }
    }

    let dp = new AirDatepicker(calendar, {
        selectedDates: [new Date()],
        locale: langData,
        onRenderCell({date, cellType, datepicker}) {
          const fddew = new Date(datepicker.selectedDates);

          for (let index = 0; index < arrayEventDate.length; index++) {
              const array = arrayEventDate[index].split('-');
              if (date.getFullYear() === Number(array[0])) {
                  if (date.getMonth() === Number(array[1]) - 1) {
                      if (date.getDate() === Number(array[2])) {
                          return {
                              classes: 'event'
                          }
                      }
                  }
              }
          }
        },
        onSelect({date, formattedDate}) {
          if(date) {
            const dateElem = new Date(date);
            const format = dateFormatting(dateElem);
            sendRequest(format);
          } else {
            const textNotDate = hiddenBlock.querySelector('.upcoming-events__plug--date-not-selected')
            const textNotDateClone = textNotDate.cloneNode(true);
            const list = inner.querySelector('.upcoming-events__list');
            if(list.innerHTML !== ''){
              list.innerHTML = '';
              list.append(textNotDateClone);
            }

          }
        },
    });

    getCurrentDay();

    // Запрашиваем данные на текущий день
    function getCurrentDay() {
      const date = new Date();
      // Получаем компоненты даты
      const format = dateFormatting(date);
      sendRequest(format);
    };

    // Отправка запроса
    function sendRequest(selectedDate) {
      const list = inner.querySelector('.upcoming-events__list');

      list.innerHTML = '';
      if(!list.classList.contains('loading')) {
        list.classList.add('loading');
      }

      fetch(`https://dev.tisbi.ru/api/events/${selectedDate}/${lang}`)
        .then((response) => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          list.classList.remove('loading');
          return response.json();
        })
        .then(data => showEvent(data, lang))
        .catch(error => console.error('Fetch error:', error));
    }

    // форматирование даты
    function dateFormatting(date) {
      const day = String(date.getDate()).padStart(2, '0'); // День
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц (месяцы начинаются с 0)
      const year = date.getFullYear(); // Год


      const titleDate = inner.querySelector('.upcoming-events__date');
      titleDate.classList.remove('loading');
      titleDate.innerHTML = `${day} ${langData.monthsChanges[month - 1]} ${year}`;

      const format = `${year}-${month}-${day}`;
      return format;
    }

    // Добавляем в DOM, созданный блок с данными
    function showEvent(datas, lang) {
      const list = inner.querySelector('.upcoming-events__list');
      list.addEventListener('click', function(e) {
        if(e.target.closest('.upcoming-events__item-btn--sign-up')) {
          const eventItem = e.target.closest('.upcoming-events__item').cloneNode(true);

          eventItem.querySelector('.upcoming-events__item-btns').style.display = 'none';

          const modalEvent = document.querySelector('[data-target="modal-registration-event"]');
          const rightSide = modalEvent.querySelector('.modal__registration-right');
          rightSide.innerHTML = '';
          rightSide.append(eventItem);

          const formModal = modalEvent.querySelector('.form-registration__form');
          formModal.setAttribute('data-id', eventItem.dataset.id);
        }
      })

      if(datas.length !== 0) {
        for (let data of datas) {
          const itemBlock = hiddenBlock.querySelector('.upcoming-events__item');
          const itemBlockClone = itemBlock.cloneNode(true);

          const btnSignUp = itemBlockClone.querySelector('.upcoming-events__item-btn--sign-up');
          const btnSignUpLink = itemBlockClone.querySelector('.upcoming-events__item-btn--sign-up-link');

          if(new Date(data.startDate) < new Date()) {
            btnSignUp.style.display = 'none';
          }

          const btnGoTo = itemBlockClone.querySelector('.upcoming-events__item-btn--go-to');
          const yaShare2 = itemBlockClone.querySelector('.ya-share2');

          if(data.pageUrl) {
            btnGoTo.setAttribute('href', window.location.origin + data.pageUrl);

            yaShare2.setAttribute('data-lang', lang);
            yaShare2.setAttribute('data-url', window.location.origin + data.pageUrl);
          } else {
            btnGoTo.style.display = 'none';
            yaShare2.style.display = 'none';
          }

          if(data.registrationUrl) {
            btnSignUp.style.display = 'none';
            btnSignUpLink.style.display = 'flex';
            btnSignUpLink.setAttribute('href', data.registrationUrl);
          } else {
            btnSignUp.style.display = 'flex';
            btnSignUpLink.style.display = 'none';
          }


          const newitemBlockClone = itemBlockClone.outerHTML
            .replace('{id}', data.id)
            .replace('{type}', data.type)
            .replace('{rubric}', data.rubric)
            .replace('{tags}', `${data.tags.map(element => `<li class="upcoming-events__item-top-tag">${element.name}</li>`).join('')}`)
            .replace('{title}', data.title)
            .replace('{time}', `${formatDateTime(data.startDate)[0]}<span>${formatDateTime(data.startDate)[1]}</span>`)
            .replace('{location}', data.location)
            .replace('{form}', data.form[0])

          const divBlock = document.createElement('div');
          divBlock.innerHTML = newitemBlockClone;
          list.append(divBlock);


          if (!document.querySelector('script[src="https://yastatic.net/share2/share.js"]')) {
            const script = document.createElement('script');
            script.src = "https://yastatic.net/share2/share.js";
            script.async = true;
            list.appendChild(script);
          }
        }
      } else {
        const textNotDate = hiddenBlock.querySelector('.upcoming-events__plug--event-are-absent');
        const textNotDateClone = textNotDate.cloneNode(true);
        list.append(textNotDateClone);
      }
    }

    // Меняем формат даты и возвращаем её
    function formatDateTime(isoString) {
      // Создаем объект Date из строки
      const date = new Date(isoString);

      // Получаем компоненты даты
      const day = String(date.getDate()).padStart(2, '0'); // День
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц (месяцы начинаются с 0)
      const year = date.getFullYear(); // Год

      // Получаем компоненты времени
      const hours = String(date.getHours()).padStart(2, '0'); // Часы
      const minutes = String(date.getMinutes()).padStart(2, '0'); // Минуты

      // Форматируем дату и время
      const formattedDate = `${day}.${month}.${year}`;
      const formattedTime = `${hours}:${minutes}`;

      return [formattedDate, formattedTime];
    }


    if (window.matchMedia('(min-width: 1200px)').matches) {
        var sticky = new Sticky('.upcoming-events__calendar .air-datepicker');
        sticky.options.marginTop = 130;
        sticky.options.marginBottom = 0;
    }
}
