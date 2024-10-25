const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");


add.addEventListener("click", () => {
  count.innerHTML++;
});

subtract.addEventListener("click", () => {
  count.innerHTML--;
});

resetCount.addEventListener("click", () => {
  count.innerHTML = 0;
});
