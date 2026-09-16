// Sweet Crumbs Bakery: client-side enquiry validation and feedback.
// Runs only on enquiry.html — every other page loads this file harmlessly
// because the guard clause below exits early when the form isn't present.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  if (!form) return; // not the enquiry page — nothing to do

  const fields = ["name", "email", "product", "message"];

  // Writes (or clears, when message is "") the error text for one field.
  const error = (id, message) => {
    const el = document.getElementById(id + "Error");
    if (el) el.textContent = message;
  };

  const clearErrors = () => fields.forEach(id => error(id, ""));

  form.addEventListener("submit", event => {
    event.preventDefault(); // this is a front-end demo; nothing is sent to a server
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const message = document.getElementById("message").value.trim();

    let valid = true;

    // Full name: require at least two characters.
    if (name.length < 2) {
      error("name", "Please enter your full name.");
      valid = false;
    }

    // Email: simple pattern check (something@something.something).
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error("email", "Please enter a valid email address.");
      valid = false;
    }

    // Enquiry type: the <select> must have a chosen option.
    if (!product) {
      error("product", "Please select what you are enquiring about.");
      valid = false;
    }

    // Message: require enough detail to be a useful enquiry.
    if (message.length < 10) {
      error("message", "Please provide at least 10 characters of detail.");
      valid = false;
    }

    const status = document.getElementById("formStatus");

    if (!valid) {
      status.innerHTML = "<p class=\"error\">Please correct the highlighted fields and try again.</p>";
      return;
    }

    // Success path: strip angle brackets from the name before echoing it
    // back, so a value like "<script>" can never be interpreted as markup.
    status.innerHTML = "<div class=\"success\"><strong>Enquiry received!</strong> Thank you, " +
      name.replace(/[<>]/g, "") +
      ". This demo confirms successful validation. A real website would now send the enquiry to the bakery.</div>";

    form.reset();
  });
});
