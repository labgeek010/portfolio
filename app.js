
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const topicInput = document.getElementById('topic');
    const messageInput = document.getElementById('message');

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!nameRegex.test(nameInput.value)) {
        showError(nameInput, 'Name is not valid');
        return false;
    }

    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Email is not valid');
        return false;
    }

    if (topicInput.value.trim() === '') {
        showError(topicInput, 'Topic is required');
        return false;
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        return false;
    }

    return true;
}

function showError(inputElement, message) {
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = message;
}

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});