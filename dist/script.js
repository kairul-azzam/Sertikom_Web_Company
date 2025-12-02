// NAVBAR SCROLL
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolling-active", window.scrollY > 0);
});

// VALIDASI FORM KONTAK
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    function createErrorElement(input) {
        const wrapper = document.createElement("div");
        wrapper.className = "error-wrapper";

        const error = document.createElement("small");
        error.className = "error-text";
        wrapper.appendChild(error);

        input.insertAdjacentElement("afterend", wrapper);
        return error;
    }

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const nameError = createErrorElement(nameInput);
    const emailError = createErrorElement(emailInput);
    const messageError = createErrorElement(messageInput);

    // Pesan sukses
    const successMsg = document.createElement("p");
    successMsg.className = "success-message";
    form.appendChild(successMsg);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        // Reset
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMsg.textContent = "";

        // Nama
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Nama tidak boleh kosong.";
            valid = false;
        }

        // Email
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email tidak boleh kosong.";
            valid = false;
        } else if (!pattern.test(emailInput.value)) {
            emailError.textContent = "Format email tidak valid.";
            valid = false;
        }

        // Pesan
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Pesan tidak boleh kosong.";
            valid = false;
        }

        if (!valid) return;

        // Jika berhasil
        successMsg.textContent = "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.";

        // Reset form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        setTimeout(() => successMsg.textContent = "", 4000);
    });

    // Error hilang otomatis ketika mengetik
    nameInput.addEventListener("input", () => nameError.textContent = "");
    emailInput.addEventListener("input", () => emailError.textContent = "");
    messageInput.addEventListener("input", () => messageError.textContent = "");
});
