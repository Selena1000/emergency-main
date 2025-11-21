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
if (form) {
  form.addEventListener("invalid", cancelPopup, true);
  form.addEventListener("submit", handleSubmit);
}
// Infographic

const kaffekop = document.querySelector("#kaffe");
const infotext = document.querySelector("#infotext");
const infobox1 = document.querySelector("#efficiency");
const infobox2 = document.querySelector("#requirement");

if (kaffekop) {
  kaffekop.addEventListener("click", kaffeinformation);
}

function kaffeinformation() {
  console.log("kaffeinformation");
  infotext.textContent = "Få noget kaffe";
  infobox1.textContent = "Kaffe gøre dig hyper, så sørg for du køber en kop kaffe med ekstra shots i!";
  infobox2.textContent = "Kaffe er et krav for alle.";
}

const seng = document.querySelector("#Seng");

if (seng) {
  seng.addEventListener("click", senginformation);
}
function senginformation() {
  console.log("senginformation");
  infotext.textContent = "Sover du nok?";
  infobox1.textContent = "Gå i seng tidligt og arbejd videre næste dag og evt. prioriter dine opgaver bedre";
  infobox2.textContent = "Søvn er vigtigt for din hjerne og dit helbred, det er ikke værd at ødelægge det for lidt arbejde";
}

const skrivebord = document.querySelector("#skrivebord");
if (skrivebord) {
  skrivebord.addEventListener("click", skrivebordinformation);
}
function skrivebordinformation() {
  console.log("skrivebordinformation");
  infotext.textContent = "Ny alarm eller ny metode?";
  infobox1.textContent = "Sæt flere alarmer til at stå tidligere op end normalt";
  infobox2.textContent = "Sæt din alarm langt væk fra dig, så du er nødt til at stå op for at slukke den";
}
