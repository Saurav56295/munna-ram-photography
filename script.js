const whatsappNumber = "919152633218";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");


menuButton.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "Close navigation" : "Open navigation"
  );
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#customer-name").value.trim();
  const session = document.querySelector("#session-type").value;
  const message = document.querySelector("#message").value.trim();

  const whatsappMessage = [
    `Hello! My name is ${name}.`,
    `I am interested in a ${session.toLowerCase()}.`,
    message ? `A few details: ${message}` : "",
    "Could you please share your availability and pricing?"
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
});