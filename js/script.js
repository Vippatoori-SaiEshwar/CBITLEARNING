function validateRegister() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let confirm = document.getElementById("confirm").value;

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return false;
  }

  if (!email.includes("@")) {
    alert("Invalid email");
    return false;
  }

  if (pass !== confirm) {
    alert("Passwords do not match");
    return false;
  }

  alert("Registration Successful ✅");
  return true;
}

function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  if (!email.includes("@")) {
    alert("Invalid email");
    return false;
  }

  if (pass.length < 4) {
    alert("Password too short");
    return false;
  }

  alert("Login Successful ✅");
  return true;
}

function loadCourse() {
  let p = new URLSearchParams(window.location.search);
  let c = p.get("course");

  let data = "";

  if (c === "web") {
    data = `
      <h2>Web Development</h2>
      <img src="webprogramming.jpg" alt="Web Development" />
      <p>Instructor: Sai</p>
      <p>Price: ₹999</p>
      <p>Duration: 40 hours</p>
      <p>Curriculum: HTML, CSS, JS</p>
      <button>Enroll</button>
    `;
  }

  if (c === "python") {
    data = `
      <h2>Python</h2>
      <img src="pythonprogramming.jpg" alt="Python Programming" />
      <p>Instructor: Akshay</p>
      <p>Price: ₹799</p>
      <p>Duration: 30 hours</p>
      <p>Curriculum: Basics, OOP</p>
      <button>Enroll</button>
    `;
  }

  document.getElementById("details").innerHTML = data;
}