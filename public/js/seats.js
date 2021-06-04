// const reserveBtn = document.getElementById('submitReservation');

// reserveBtn.addEventListener("click", function() {
//   event.preventDefault();
//   getParams();
// });

// function getParams() {
//   var searchParamArr = document.location.search.split('?');
//   var movieId = searchParamArr[1];
//   console.log(movieId);
// }

const reservationFormHandler = async (event) => {
  event.preventDefault();
  console.log("reserved");
  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#reserveEmail").value.trim();
  const reservation = document.querySelector("#reserveSeat").value.trim();

  if (firstName && lastName && email && reservation) {
    const response = await fetch("/api/customer/", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, reservation }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/customer/confirmation", (err) => {
        if (err) console.log(err);
      });
      console.log("testing.........................");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#reserved")
  .addEventListener("submit", reservationFormHandler);


  