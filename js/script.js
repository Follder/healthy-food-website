import tabs from './modules/tabs';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    const deadline = '2023-04-16';

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    forms('.modal', 'form');
    modal('.modal', '[data-modal]');
    timer('.timer', deadline);
    calc();
    slider({
        field: '.offer__slider-inner',
        wrapper: '.offer__slider-wrapper',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current'     
    });
});