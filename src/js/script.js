let email = document.getElementById('email');
let alert = document.getElementById("alert");

function validateEmail() {
  if (!email.value === "" || email.value.includes("@")) {
    console.log("berhail")
    window.location.reload()
  } else {
    document.querySelector(".error").style.display = "inline-block";
    alert.innerHTML = "Please provide a valid email";
    alert.style.color = "red";
    console.log("gagal")
  }
}
