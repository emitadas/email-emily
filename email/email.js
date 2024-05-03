  let email = document.getElementById("email");
  let form = document.querySelector("form");
  let textForm = document.getElementById("textForm");
  let textEmail = document.getElementById("textEmail");
  
  form.addEventListener("submit", (e) => {
    if (email.value == "") {
      textForm.textContent = "o email precisa estar preenchido!";
    } else if (
      validaremail(email.value) === true
    ) {
      console.log(email.value);
      textForm.textContent = "";
      textEmail.textContent = "";
    } else {
      console.log("email nao preenchido");
    }

    e.preventDefault();
});

email.addEventListener("keyup", () => {
  if (validaremail(email.value) !== true) {
    textEmail.textContent = "O formato de email errado";
  } else {
    textEmail.textContent = "";
  }
});

  function validaremail(email) {
    let padraoemail =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return padraoemail.test(email);
  }