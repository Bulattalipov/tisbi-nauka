export default function (){

  const timers = document.querySelectorAll('.timer-box');
  const langValue = document.querySelector('html').attributes.lang.value;

  if(timers.length === 0) return;

  timers.forEach(item => {
    item.closest('.timer').style.display = 'flex';
    const deadlineTime = item.getAttribute("data-time");

    const deadline = new Date(deadlineTime);

    const remainungDays = item.closest('.timer').attributes['data-timer-show-later'];

    if(remainungDays) {
      const remainungDaysSeconds = parseInt(remainungDays.value) * 24 * 60 * 60 * 1000;

      if(deadline - new Date() < remainungDaysSeconds) {
        item.closest('.event__info-timer').style.display = 'flex';
      }
    }

    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
        const btnRegis = item.querySelector('.timer__btn--registration');
        item.closest('.timer').querySelector('.timer__completed').style.display = 'flex';
        item.closest('.timer').querySelector('.timer__current').style.display = 'none';
        if(btnRegis) {
          btnRegis.style.display = 'none';
        }
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;

      if(langValue === 'ru') {
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      }

      if(langValue === 'en') {
        $days.dataset.title = declensionNum(days, ['day', 'days', 'days']);
        $hours.dataset.title = declensionNum(hours, ['hour', 'hours', 'hours']);
        $minutes.dataset.title = declensionNum(minutes, ['minute', 'minutes', 'minutes']);
      }
    }
    // получаем элементы, содержащие компоненты даты
    const $days = item.querySelector('.timer-days');
    const $hours = item.querySelector('.timer-hours');
    const $minutes = item.querySelector('.timer-minutes');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  })
}
