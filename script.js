const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const formStatus = document.getElementById("form-status");

if (newsletterForm && emailInput && formStatus) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    formStatus.textContent = "You are on the early list. Email service hookup is the next integration step.";
    formStatus.classList.add("is-success");
    newsletterForm.reset();
  });
}
