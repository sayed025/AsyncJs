const paymentSucces = true;
const marks = 85;

function enroll(callback) {
    console.log("course enrollment is in progress...");

    setTimeout(() => {
        if (paymentSucces) {
            callback();
        }
        else {
            console.log('payment failed!');
        }
    }, 2000);
}

function progress(callback) {
    console.log('course on progress...');

    setTimeout(() => {
        if (marks >= 80) {
            callback();
        }
        else {
            console.log('Sorry you failed!');
        }
    }, 3000);

}

function getCertificate() {
    console.log('Preparaing your certificate');

    setTimeout(() => {
        console.log("congrats!! You got the certificate");
    }, 1000);
}

enroll(() => {
    progress(getCertificate);
});