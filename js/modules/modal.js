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

    modalTrigger.forEach((btn) => {
        btn.addEventListener('click', () => {
            openModal(modalSelector);
            clearTimeout(modalTimerId);
        });
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    
    window.addEventListener('scroll', showModalByScroll);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('visible')) {
            closeModal(modalSelector);
        }
    });
}

export default modal;
export { openModal };
export { closeModal };

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