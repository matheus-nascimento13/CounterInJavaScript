let sumValue = document.querySelector(".counter");
let btnSum = document.querySelector(".sum");
let btnMinus = document.querySelector(".minus");
let btnReset = document.querySelector(".reset");


btnSum.addEventListener("click", () => {
    sumValue.innerHTML = parseInt(sumValue.innerHTML) + 1;
})

btnMinus.addEventListener("click", () => {

    sumValue.innerHTML = parseInt(sumValue.innerHTML) - 1;
})
btnReset.addEventListener("click", () => {
    sumValue.innerHTML = parseInt(sumValue.innerHTML) - parseInt(sumValue.innerHTML)
})