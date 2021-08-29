const featuresLinks = [
  { liElem: "l-first", divemem: "s-first" },
  { liElem: "l-second", divemem: "s-second" },
  { liElem: "l-third", divemem: "s-third" },
];

const ulLinks = document.querySelectorAll(".ul-section li");
const InfoSectionOverflow = document.querySelector(".section-infos-overflow");
const sectionInfosContainer = document.querySelectorAll(
  ".section-infos-container"
);
ulLinks.forEach((liElem) =>
  liElem.addEventListener("click", () => {
    ulLinks.forEach((liE) => (liE.className = ""));
    divElemId = featuresLinks.filter(
      (elem) => elem.liElem === liElem.id.trim()
    )[0].divemem;

    liElem.classList.add("selected");
    sectionInfosContainer.forEach((el) => el.classList.remove("active"));
    document.querySelector(`#${divElemId}`).classList.add("active");
  })
);

/* question sections */

const questions = document.querySelectorAll(".questions-section ul li");

questions.forEach((question) =>
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
  })
);

/* nav menu */

const navBtn = document.querySelector(".menu");
const navContainer = document.querySelector(".nav-container");
const navOverflow = document.querySelector(".overflow-nav");
navBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navContainer.classList.toggle("active");
  navOverflow.classList.toggle("active");
  document.querySelector("body").classList.toggle("active-nav");
});

/* email newsletter validation */
const inputContainer = document.querySelector(".input-container");
const formInput = inputContainer.querySelector("input");
formInput.addEventListener("input", function () {
  if (this.value.length > 0) inputContainer.classList.remove("active");
});
document
  .querySelector("#newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateEmail(formInput.value.trim())) {
      inputContainer.classList.remove("active");
      document.querySelector(".email-popup").classList.add("active");
      setTimeout(() => (formInput.value = ""), 500);
      setTimeout(() => {
        document.querySelector(".email-popup").classList.remove("active");
      }, 7000);
    } else {
      inputContainer.classList.add("active");
    }
  });

/* hide popup */
document.querySelector("#closePopUp").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".email-popup").classList.remove("active");
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
