import AirDatepicker from 'air-datepicker';
import Sticky from "sticky-js";

export default function() {

    let dp = new AirDatepicker('#el', {
        selectedDates: [new Date()],
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
        }
    });

    if (window.matchMedia('(min-width: 1200px)').matches) {
        var sticky = new Sticky('.upcoming-events__calendar .air-datepicker');
        sticky.options.marginTop = 130;
        sticky.options.marginBottom = 0;
    }
}
