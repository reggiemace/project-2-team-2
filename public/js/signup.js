const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("double-click");
  
    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#reserveEmail").value.trim();
    const password = document.querySelector("#customerPassword").value.trim();
  
    if (firstName && lastName && email && password) {
      const response = await fetch("/api/customer/", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/api/customer/login");
      } else {
        alert("Failed to sign up.");
      }
    }
  };
  document
    .querySelector(".signup-form")
    .addEventListener("click", signupFormHandler);
