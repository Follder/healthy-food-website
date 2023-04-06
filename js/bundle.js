/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
  //  Calculator
  //  Отримати всі змінні
  //  Написати функцію розрахунку
  //  Написати функцію отримання статичних даних
  //  Написати функцію отримання динамічних даних
  //  Проставити дефолтні значення

  let sex,
    height,
    weight,
    age,
    ratio = 1.375;
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
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    } else {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    }
  }
  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(item => {
      item.addEventListener('click', e => {
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
      item.addEventListener('input', e => {
        if (item.value.match(/\D/g)) {
          item.style.border = '1px solid red';
        } else {
          item.style.border = 'none';
        }
        switch (e.target.getAttribute('id')) {
          case 'height':
            height = +item.value;
            break;
          case 'weight':
            weight = +item.value;
            break;
          case 'age':
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards() {
  //Cards
  class Cards {
    constructor(img, alt, title, descr, price, parentSelector) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }
      this.classes = classes;
      this.transfer = 38;
      this.changeToUAH();
    }
    changeToUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const card = document.createElement('div');
      if (this.classes.length === 0) {
        this.classes = 'menu__item';
        card.classList.add(this.classes);
      } else {
        this.classes.forEach(className => card.classList.add(className));
      }
      card.innerHTML = `<img src="${this.img}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Ціна:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
      this.parent.append(card);
    }
  }
  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResourse)('http://localhost:3000/menu').then(data => {
    //data.forEach(({img, alt, title, descr, price}) => {
    //  new Cards(img, alt, title, descr, price, '.menu__field > .container').render();
    createCard(data);
  });
  function createCard(data) {
    data.forEach(_ref => {
      let {
        img,
        alt,
        title,
        descr,
        price
      } = _ref;
      price = price * 39;
      const card = document.createElement('div');
      card.classList.add('menu__item');
      card.innerHTML = `<img src="${img}" alt="${alt}">
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Ціна:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>`;
      document.querySelector('.menu__field > .container').append(card);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(modalSelector, formSelector) {
  // POST FETCH
  const forms = document.querySelectorAll(formSelector);
  const message = {
    success: 'Thanks!',
    loading: '../img/spinner.svg',
    failer: 'Something wrong...'
  };
  forms.forEach(item => bindPostData(item));
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const status = document.createElement('img');
      status.style.cssText = `
                color: red;
                display: block;
                margin: 0 auto;
                height: 40px;
            `;
      status.setAttribute('src', message.loading);
      form.parentNode.append(status);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showThanksModal(message.success);
        status.remove();
      }).catch(() => {
        showThanksModal(message.failer);
      }).finally(() => {
        form.reset();
      });
    });
  }
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modalSelector);
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    document.querySelector(modalSelector).append(thanksModal);
    setTimeout(() => {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modalSelector);
      thanksModal.remove();
      prevModalDialog.classList.remove('hide');
    }, 2000);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

//GET example

/*     const uah = document.querySelector('#uah'),
    usd = document.querySelector('#usd');

    uah.addEventListener('input', () => {
        const request = new XMLHttpRequest;

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();



        request.addEventListener('load', () => {
            if (request.status === 200) {
                let data = JSON.parse(request.response);
                usd.value = Math.round(+uah.value / data.current.usd);
            } else {
                usd.value = 'What"s wrong';
            }
        });
    }); */

// POST
/*   const forms = document.querySelectorAll('form');

  const message = {
   success : 'Дякуємо, ми з вами зв"яжемося',
   loading : 'Відправка данних...',
   failer : 'Щось пішло не так'
  };

  forms.forEach(item => {
       postData(item);
  });

  function postData(form) {
       form.addEventListener('submit', (e) => {
           e.preventDefault();

           const statusMessage = document.createElement('div');
           statusMessage.classList.add('status');
           statusMessage.textContent = message.loading;
           form.append(statusMessage); 

           const r = new XMLHttpRequest();
           r.open('POST', 'server.php');
           r.setRequestHeader('Content-type', 'multipart/form-data');

           const formData = new FormData(form);
           r.send(formData);

           r.addEventListener('load', () => {
               if (r.status === 200) {
                   console.log(r.response);
                   statusMessage.textContent = message.success;
                   form.reset();
                   setTimeout(() => {
                       statusMessage.remove();
                   }, 2000);
               } else {
                   console.log('error');
                   statusMessage.textContent = message.failer;
               }
           });
       });
  }

*/
//POST FORMDATA
/*     const forms = document.querySelectorAll('form');

   const message = {
    success : 'Thanks!',
    loading : '../img/spinner.svg',
    failer : 'Something wrong...'
   };

   forms.forEach(item => postData(item));

   function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const r = new XMLHttpRequest();
            const formData = new FormData(form);
    
            r.open('POST', 'server.php');     
            r.send(formData);
    
            r.addEventListener('load', () => {
                    
                const status = document.createElement('img');
                status.style.cssText = `
                    color: red;
                    display: block;
                    margin: 0 auto;
                    height: 40px;
                `;
                status.setAttribute('src', message.loading);
                form.parentNode.append(status);

    
                if (r.status === 200) {
                    showThanksModal(message.success);
                    form.reset();
                    status.remove();
                } else {
                    showThanksModal(message.failer);
                    form.reset();
                }
            });
        });
   } */

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  console.log(modal);
  modal.classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove('visible');
  document.body.style.overflow = '';
}
function modal(modalSelector, triggerSelector) {
  //Modal
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  const modalTimerId = setTimeout(() => openModal(modalSelector), 50000);
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(modalSelector);
      clearTimeout(modalTimerId);
    });
  });
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(modalSelector);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('visible')) {
      closeModal(modalSelector);
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/*
   function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    showModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    modal.append(thanksModal);

    setTimeout(() => {
        closeModal();
        thanksModal.remove();
        prevModalDialog.classList.remove('hide');
    }, 2000);
}
 */

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(_ref) {
  let {
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
  } = _ref;
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
    if (offset == width * (slides.length - 1)) {
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
    if (offset == 0) {
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
  slides.forEach((item, i) => {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);
    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.append(dot);
    indicators.push(dot);
  });
  indicators.forEach(item => {
    item.addEventListener('click', e => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  // Tabs
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  }
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', e => {
    if (e.target && e.target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (item == e.target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
  // Timer

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(total / (1000 * 60 * 60 * 24)),
      hours = Math.floor(total / (1000 * 60 * 60) % 24),
      minutes = Math.floor(total / (1000 * 60) % 60),
      seconds = Math.floor(total / 1000 % 60);
    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    }
    return num;
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timerInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (endtime <= 0) {
        clearInterval(timerInterval);
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }
    }
  }
  setClock(id, deadline);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourse": () => (/* binding */ getResourse),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};
const getResourse = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  } else {
    return await res.json();
  }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");







window.addEventListener('DOMContentLoaded', () => {
  const deadline = '2023-04-16';
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal', 'form');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal', '[data-modal]');
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__["default"])('.timer', deadline);
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
    field: '.offer__slider-inner',
    wrapper: '.offer__slider-wrapper',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current'
  });
});
const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));
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
  return `three is done: ${outpu1} ${outpu2} ${outpu3}`;
}
one().then(console.log);
two().then(console.log);
three().then(console.log);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map