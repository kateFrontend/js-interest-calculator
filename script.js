let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");

let buttonReset = document.getElementById("reset-btn");
buttonReset.addEventListener("click", reloadPage);

function reloadPage() {
    location. reload();
}

let calculate = () => {
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;

    let simpleInterest = duration == "year" ? (principal * rate * time) / 100 : (principal * rate * time) / 1200;
    let amount = principal + simpleInterest;

    document.getElementById("principalAmount").innerHTML = principal.toFixed(2);
    document.getElementById("totalInterest").innerHTML = simpleInterest.toFixed(2);
    document.getElementById("totalAmount").innerHTML = amount.toFixed(2);
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);