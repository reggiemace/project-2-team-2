const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#customerEmail").value.trim();
  const password = document.querySelector("#customerPassword").value.trim();
  console.log("click");
  if (email && password) {
    const response = await fetch("/api/customer/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/customer/homepage", (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      alert("Failed to log in.");
    }
  }
};


document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);


document.querySelector("#create").addEventListener("click", () => {
  document.location.replace("/api/customer/signup");
});
