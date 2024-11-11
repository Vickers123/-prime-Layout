const languages = document.getElementById("languages");
const lang = document.getElementById("lang");

const login = document.getElementById("login");
const user = document.getElementsByClassName("user")[0];


console.log(lang);
let showLanguages = false;

lang.addEventListener("mouseenter", () => {
  console.log("isssssssssss");
  languages.classList.remove("languages");
  login.style.top = "800px";
  showLanguages = true;
});

lang.addEventListener("mouseleave", () => {
  languages.classList.add("languages");

});

languages.addEventListener("mouseenter", () => {
  if (showLanguages) {
    languages.classList.remove("languages");
  }
  console.log("over " + showLanguages);
});

languages.addEventListener("mouseleave", () => {
  languages.classList.add("languages");
  showLanguages = false;
  console.log("out" + showLanguages);
});

// ACCOUNT



let showLogin = false;

user.addEventListener("mouseenter", () => {
  login.classList.remove("login");
  console.log("usesssssssssssss");
  login.style.top = "100px";
  showLogin = true;
});

user.addEventListener("mouseleave", () => {
  login.classList.add("login");
});

login.addEventListener("mouseenter", () => {
  if (showLogin) {
    login.classList.remove("login");
  }
});

login.addEventListener("mouseleave", () => {
  login.classList.add("login");
  showLogin = false;
});

