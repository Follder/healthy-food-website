import { openModal } from "./modal";
import { closeModal } from "./modal";
import { postData } from "../services/services";

function forms(modalSelector, formSelector) {
    // POST FETCH
    const forms = document.querySelectorAll(formSelector);

    const message = {
    success : 'Thanks!',
    loading : '../img/spinner.svg',
    failer : 'Something wrong...'
    };

    forms.forEach(item => bindPostData(item));

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
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

            postData('http://localhost:3000/requests', json)
            .then((data) => {
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
    openModal(modalSelector);

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
        closeModal(modalSelector);
        thanksModal.remove();
        prevModalDialog.classList.remove('hide');
        }, 2000);
    }
}

export default forms;

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