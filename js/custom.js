document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const company_name = document.getElementById("company_name").value;
      const message = document.querySelector('textarea[name="message"]').value;

      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ACompany Name: ${company_name}%0AMessage: ${message}`;

      const whatsappNumber = "917208686537";
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
      window.open(whatsappUrl, "_blank");
    });
});
