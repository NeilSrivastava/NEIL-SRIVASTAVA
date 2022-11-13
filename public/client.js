
function request_otp() {
    const output = generateRandomNumber();
    function generateRandomNumber() {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }
    console.log(output);
}

const z = document.getElementById('verify_otp_button');
const y = document.getElementById('verify_otp_text');
z.addEventListener('click',function(e) {
    if(output==parseInt(y.innerText)) {
        console.log("Match successful");
    }
    else console.log("Match Not successful! Try Again");
});

