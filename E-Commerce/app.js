const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")



menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
      
    });
});

const buyButton = document.querySelector(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

buyButton.addEventListener ("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});