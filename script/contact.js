document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("appointment-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let date = document.getElementById("date").value;

      if (name && email && date) {
        document.getElementById(
          "confirmation"
        ).innerText = `Thank you, ${name}. Your appointment on ${date} has been booked!`;
        document.getElementById("appointment-form").reset();
      } else {
        document.getElementById("confirmation").innerText =
          "Please fill in all fields.";
      }
    });
});
