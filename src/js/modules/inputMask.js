import Inputmask from 'inputmask';

export default function () {
    const phoneInputs = Array.from(document.querySelectorAll('.js-phone-mask'));
    phoneInputs.forEach(input => {
        const instance = new Inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false
        });
        instance.mask(input);
    });
}