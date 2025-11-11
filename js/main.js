// document.querySelector("#en knap du skal evt skal tilføje i html").addEventListener("click", updateInfoboxHead);
// // Denne JS gøre sådan at når man klikker på knappen, så vil en infobox komme frem på click

// function updateInfoboxHead() {
//   console.log("updateinfohead");
// }
const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formdata = new FormData(form);
  const firstname = formdata.get("first_name");

  const lastname = formdata.get("last_name");
  const emailname = formdata.get("email");
  const passwordname = formdata.get("password");
  const termsname = formdata.get("accept_terms");

  // 2. Vis værdierne i de rigtige output-felter
  firstNameOutput.textContent = firstname;
  lastNameOutput.textContent = lastname;
  emailOutput.textContent = emailname;
  passwordOutput.textContent = passwordname;
  termsOutput.textContent = termsname;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
