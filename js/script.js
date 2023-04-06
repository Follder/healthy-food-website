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

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
one().then(console.log);
two().then(console.log);
three().then(console.log);