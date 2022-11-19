let isMenuOpen = false;
let isBookingOpen = false;

function toggleMenu() {
  if (isMenuOpen) {
    isMenuOpen = false;
    return document.body.classList.remove("menu-open");
  }
  isMenuOpen = true;
  document.body.classList += " menu-open";
}

function toggleBooking() {
  if (isBookingOpen) {
    isBookingOpen = false;
    return document.body.classList.remove("booking-open");
  }
  isBookingOpen = true;
  document.body.classList += " booking-open";
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("toggled");
  });
});
