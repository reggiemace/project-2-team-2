const jawsBtn = document.getElementById("jawsMovie");
const notebookBtn = document.getElementById("notebookMovie");
const ozBtn = document.getElementById("wizardOzMovie");

jawsBtn.addEventListener("click", function (event) {
  const id = event.target.getAttribute("data-id");
  document.location.assign("seatReservation" + `?${id}`);
});

notebookBtn.addEventListener("click", function (event) {
  const id = event.target.getAttribute("data-id");
  document.location.assign("seatReservation" + `?${id}`);
});

ozBtn.addEventListener("click", function (event) {
  const id = event.target.getAttribute("data-id");
  document.location.assign("seatReservation" + `?${id}`);
});
