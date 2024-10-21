import AirDatepicker from 'air-datepicker';

export default function() {

    const block = document.querySelector('#filter-calendar');
    if(!block) return;

    let dp = new AirDatepicker('#filter-calendar', {
        selectedDates: [new Date()],
        range: false,
        onRenderCell({date, cellType, datepicker}) {
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
        onSelect({date, formattedDate, datepicker}) {
          const input = document.querySelector('.search-filter__extended-calendar-input');
          if(typeof formattedDate === 'object') {
            input.value = formattedDate.join('-');
          } else {
            input.value = formattedDate;
          }
        }
    });

    const btn1 = document.querySelector('.search-filter__extended-calendar-btn1');
    const btn2 = document.querySelector('.search-filter__extended-calendar-btn2');
    btn1.addEventListener('click', function(e) {
      e.preventDefault();
      dp.update({
        range: true
      });
      this.style.display = 'none';
      btn2.style.display = 'flex';
    })

    btn2.addEventListener('click', function(e) {
      e.preventDefault();
      dp.update({
        range: false
      });
      this.style.display = 'none';
      btn1.style.display = 'flex';
    })

}
