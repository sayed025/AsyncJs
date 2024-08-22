const paymentSucces = true;
const marks = 70;

function enroll() {
    console.log('course enrollment is in progress...');

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSucces) {
                resolve();
            }
            else {
                reject('payment failed!');
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log('course on progress...');

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            }
            else {
                reject('Sorry you failed!');
            }
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log('Preparaing your certificate');

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("congrats!! You got the certificate");
        }, 1000);
    });
    return promise;
}


async function course() {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch (err) {
        console.log(err);
    }
}

course();