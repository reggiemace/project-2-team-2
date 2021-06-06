const mainPageHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/api/customer/login");
};
document.querySelector("#login").addEventListener("click", mainPageHandler);
