function calc() {
    
    //  Calculator
    //  Отримати всі змінні
    //  Написати функцію розрахунку
    //  Написати функцію отримання статичних даних
    //  Написати функцію отримання динамічних даних
    //  Проставити дефолтні значення

    let sex, height, weight, age, ratio = 1.375;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        localStorage.setItem('sex', 'female');
        sex = localStorage.getItem('sex');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        localStorage.setItem('ratio', 1.375);
        sex = localStorage.getItem('ratio');
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(item => {
            item.classList.remove(activeClass);

            if (item.getAttribute('id') == localStorage.getItem('sex')) {
                item.classList.add(activeClass);
            }
            if (item.getAttribute('data-ratio') == localStorage.getItem('ratio')) {
                item.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcRatio() {
        let result = document.querySelector('.calculating__result span');

        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '';
            return;
        }

        if (sex == 'male') {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        } else {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }
    }

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                    calcRatio();
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                    calcRatio();
                }

                elements.forEach(item => {
                    item.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);


            });
        });
    }

    function getDynamicInformation(selector) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(item => {
            item.addEventListener('input', (e) => {

                if (item.value.match(/\D/g)) {
                    item.style.border = '1px solid red';
                } else {
                    item.style.border = 'none';
                }

                switch (e.target.getAttribute('id')) {
                    case 'height' :
                        height = +item.value;
                        break;
                    case 'weight' :
                        weight = +item.value;
                        break;
                    case 'age' :
                        age = +item.value;
                        break;
                }

                calcRatio();
            });
        });
    }
    calcRatio();
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    getDynamicInformation('.calculating__choose_medium input');
}

export default calc;