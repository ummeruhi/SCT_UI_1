const revealElements = document.querySelectorAll(
  ".hero-left, .hero-right, .about-card, .menu-card, .booking-info, .booking-form, .review-card"
);

revealElements.forEach((el) => el.classList.add("reveal"));

function revealOnScroll() {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.textContent = "Your table has been booked successfully!";
  bookingForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
});