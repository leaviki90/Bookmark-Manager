let toggle = document.getElementById("toggle");
let image = toggle.querySelector("img");
const form = document.getElementById("form");
const email = document.getElementById("email");
let formControl = document.getElementById("form-control");

function toggleImg() {
  let initialImg = image.src;
  let srcTest = initialImg.includes("css/images/icon-hamburger.svg");
  let newImg = {
    true: "css/images/icon-close.svg",
    false: "css/images/icon-hamburger.svg",
  }[srcTest];

  return newImg;
}

toggle.addEventListener("click", function () {
  image.src = toggleImg();
  let wrapper = document.querySelector("div.nav-wrapper");
  wrapper.classList.toggle("active");
  let headerR = document.querySelector("header");
  headerR.classList.toggle("height");
  console.log(headerR);
  logo = document.getElementById("logo");
  logo.classList.toggle("filter");
});

function showError(email, message) {
  const formControl = email.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value.trim() === "") {
    showError(email, "Whoops! Please add your email");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Whoops, make sure it’s an email");
  } else {
    formControl.classList.remove("error");
  }
});
