 /*   console.log('Запит даних...');

     setTimeout(() => {
        console.log('Підготовка даних...');

        const products = {
            name: 'TV',
            price: 1000,
        };

        setTimeout(() => {
            products.status = 'order';
            console.log(products);
        }, 2000);

    }, 2000); */

    //Promise
/*     console.log('Запит даних...');

    const req = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Підготовка даних...');
    
            const products = {
                name: 'TV',
                price: 1000,
            };

            resolve(products);
    
        }, 2000);
    });

    req.then((products) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                products.status = 'order';
                resolve(products);
            }, 2000);
            
        });
    }).then((data) => {
        data.message = 'status';
        return data;
    }).then((data) => {
        console.log(data);
    }).catch(() => {
        console.error('Error');
    }).finally(() => {
        console.log('Finally');
    });

    const test = (time => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), time);
        });
    });

    test(1000).then(() => console.log('1000'));
    test(2000).then(() => console.log('1200'));


    Promise.all([test(1000), test(2000)]).then(() => {
        console.log('all');
    });

    Promise.race([test(1000), test(2000)]).then(() => {
        console.log('all');
    });

     */
    /*              r.addEventListener('load', () => {
                     
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
             }); */