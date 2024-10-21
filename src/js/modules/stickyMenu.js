import Sticky from "sticky-js";

export default function() {
    if (window.matchMedia('(min-width: 1200px)').matches) {
        var sticky = new Sticky('.js-sticky');
        sticky.options.marginTop = 130;
        sticky.options.marginBottom = 0;
    }
}