// Theme Toggle (Works on all pages)
const toggleButton = document.querySelector("#mode-toggle");
const pageBody = document.querySelector("body");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        // Toggles a class on the body to change the entire background[cite: 5]
        pageBody.classList.toggle("yellow-mode");
    });
}

// ----------------------------------------------------
// Home Page: Visitor Check-In Form
// ----------------------------------------------------
const visitorForm = document.querySelector("#visitor-form");
const visitorGreeting = document.querySelector("#visitor-greeting");

if (visitorForm) {
    visitorForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Stops the browser's default behavior of reloading[cite: 6]
        const name = document.querySelector("#visitor-name").value; 
        visitorGreeting.textContent = `Welcome, ${name}! We've marked your visit. See you again soon for a sweet surprise!`;
        visitorForm.reset();
    });
}

// ----------------------------------------------------
// Menu Page: Contact/Order Form
// ----------------------------------------------------
const orderForm = document.querySelector("#contact-form");
const confirmation = document.querySelector("#confirmation");

if (orderForm) {
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Stops the browser's default behavior of reloading[cite: 6]
        const name = document.querySelector("#name").value; 
        confirmation.textContent = `Thanks, ${name}! Your sweet order has been received.`;
        orderForm.reset();
    });
}