let email = document.getElementById('email');
let alertMassege = document.getElementById("alert");

function validateEmail() {
  if (!email.value === "" || email.value.includes("@")) {
    alert("Thank you for following our page. we will update you with further information")
    window.location.reload()
  } else {
    document.querySelector(".error").style.display = "inline-block";
    alertMassege.innerHTML = "Please provide a valid email";
    alertMassege.style.color = "red";
  }
}
