
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "/img/air.png" },
      { code: "darkblue", img: "/img/air2.png" },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "grey",
        img: "/img/jordan.png",
      },
      {
        code: "green",
        img: "/img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "grey",
        img: "/img/blazer.png",
      },
      {
        code: "green",
        img: "/img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/img/crater.png",
      },
      {
        code: "grey",
        img: "/img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "grey",
        img: "/img/hippie.png",
      },
      {
        code: "black",
        img: "/img/hippie2.png",
      },
    ],
  },
];


const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.getElementsByClassName("navMenuItem");

let choosenProduct = products[0];
const currProductTitle = document.querySelector(".prodHeading");
const currProductPrice = document.querySelector(".prodPrice");
const currProductImg = document.querySelector(".prodImg");
const currProductColor = document.querySelectorAll(".color");

//Size
const currSize = document.querySelectorAll(".size");

Array.from(menuItems).forEach((item, index) => {
  item.addEventListener("click", function () {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of current product
    currProductTitle.innerHTML = choosenProduct.title;
    currProductPrice.innerHTML = "$" + choosenProduct.price;
    currProductImg.src = choosenProduct.colors[0].img;
    currProductColor.forEach((colo, index) => {
      colo.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currProductColor.forEach((element, index) => {
  element.addEventListener("click", function () {
    currProductImg.src = choosenProduct.colors[index].img;
  });
});

currSize.forEach((element, index) => {
  element.addEventListener("click", function () {
    currSize.forEach((a, index) => {
      a.style.backgroundColor = "white";
      a.style.color = "black";
    });
    element.style.backgroundColor = "black";
    element.style.color = "white";
  });
});

let buyButton = document.querySelector(".buyBtn2");
let paymentBox = document.querySelector(".payment");
let closeButton = document.querySelector(".closeBtn");
buyButton.addEventListener("click",function(){
   paymentBox.style.display = "flex";
})
closeButton.addEventListener("click",function(){
  paymentBox.style.display = "none";
})
