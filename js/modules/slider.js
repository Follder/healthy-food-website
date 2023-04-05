function slider({slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider 1

    /* 
    1. Отримати всі елементи
    2. Потрібен індекс
    3. Функція показу слайдів по індексу + приховування інших + умова обмеження індексу по кількості слайдів
    4. Вішаєм івент на стірлки, який викликає функцію зі зміною індекса
    5. Вивести нумерацію + додати 0 спереду
    */

    const slides = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    sliderWrapper = document.querySelector(wrapper),
    sliderInner = document.querySelector(field),
    current = document.querySelector(currentCounter),
    total = document.querySelector(totalCounter),
    width = +window.getComputedStyle(sliderWrapper).width.replace(/px/g, ''),
    indicators = [];

    console.log(width);
    let slideIndex = 1;
    let offset = 0;

    slides.forEach(slide => {
        slide.style.width = width;
    });

    sliderInner.style.cssText = `
      display: flex;
      transform: translateX(0);
      transition: 0.5s all;
      width: ${100 * slides.length}%;
    `;

    sliderWrapper.style.width = width;
    sliderWrapper.style.overflow = 'hidden';

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    next.addEventListener('click', () => {
        if (offset ==  width * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        indicators.forEach(dot => dot.style.opacity = '0.5');
        indicators[slideIndex - 1].style.opacity = '1';
    });

    prev.addEventListener('click', () => {
        if (offset ==  0) {
            offset = width * (slides.length - 1);
        } else {
            offset -= width;
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        indicators.forEach(dot => dot.style.opacity = '0.5');
        indicators[slideIndex - 1].style.opacity = '1';
    });

    const dots = document.createElement('ol');
    dots.classList.add('carousel-indicators');

    sliderWrapper.style.position = 'relative';
    sliderWrapper.append(dots);

    slides.forEach ((item, i) => {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.append(dot);
        indicators.push(dot);
    });

    indicators.forEach((item) => {
        item.addEventListener('click', (e) => {

            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = width * (slideTo - 1);

            sliderInner.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            indicators.forEach(dot => dot.style.opacity = '0.5');
            indicators[slideIndex - 1].style.opacity = '1';

        });
    });
}

export default slider;