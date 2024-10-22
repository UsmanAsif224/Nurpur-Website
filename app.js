function onSubmit() {
  console.log("Click");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(email, password);

  if (!email || !password) {
    alert("required fields are missing");
  }

  if (email === "legendusman391@gmail.com" && password === "admin123") {
    alert("Login Successfully");
    window.location.href = "./index.html";
  } else {
    alert("invalid email and password");
  }
  email.value = "";
  password.value = "";
}
