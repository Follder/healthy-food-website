import { getResourse } from "../services/services";

function cards() {
    //Cards
    class Cards {
        constructor (img, alt, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
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
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            this.parent.append(card);
        }
    }

    getResourse('http://localhost:3000/menu')
    .then(data => {//data.forEach(({img, alt, title, descr, price}) => {
        //  new Cards(img, alt, title, descr, price, '.menu__field > .container').render();
        createCard(data);
    });

    function createCard(data) {
        data.forEach(({img, alt, title, descr, price}) => {
            price = price * 39;

            const card = document.createElement('div');
            card.classList.add('menu__item');
        
            card.innerHTML = `<img src="${img}" alt="${alt}">
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>`;
            document.querySelector('.menu__field > .container').append(card);
        });
    }
}

export default cards;
