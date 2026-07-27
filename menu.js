/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.body.style.overflow = "hidden";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.body.style.overflow = "auto";
}

/* Only run if #myDialog exists on this page */
const welcomeDialog = document.getElementById("myDialog");
if (welcomeDialog) {
  welcomeDialog.showModal();
}

function closeDialogue() {
  document.getElementById("myDialog").close();
}

/* Contact form: send to Google Sheet, then show thank-you dialog */
const scriptURL = "https://script.google.com/macros/s/AKfycbwuZY7ihJ3NY24lSyCDPYMwkOaqNghixiScC1Md_avt3qlYPFCG7E11nVgBGpK36kVD/exec";
const contactForm = document.getElementById("contactFormEl");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
      .then(response => {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("thankYouDialog").showModal();
      })
      .catch(error => {
        alert("There was an error sending your message. Please try again later.");
      });
  });
}