// Function to calculate the age based on the Date of Birth
function calculateAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Function to validate the name field (8 alphabets only)
function validateName(name) {
    var nameRegex = /^[A-Za-z]{8}$/;
    return nameRegex.test(name);
}

// Function to validate the email address
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate the password (8 alphanumeric characters)
function validatePassword(password) {
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    var nameInput = document.getElementById('name');
    var dobInput = document.getElementById('dob');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    var nameValue = nameInput.value;
    var dobValue = dobInput.value;
    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;

    // Check if all fields are not blank
    if (!nameValue || !dobValue || !emailValue || !passwordValue) {
        alert('All fields are required.');
        return;
    }

    // Validate name
    if (!validateName(nameValue)) {
        alert('Name must contain 8 alphabets only.');
        return;
    }

    // Calculate age
    var age = calculateAge(dobValue);

    // Check age
    if (age < 18) {
        alert('You must be at least 18 years old to register.');
        return;
    }

    // Validate email
    if (!validateEmail(emailValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password
    if (!validatePassword(passwordValue)) {
        alert('Password must be 8 characters long and contain at least one letter and one number.');
        return;
    }

    // Form submission can proceed if all validations pass
    event.target.submit();
}

// Attach the handleSubmit function to the form's submit event
document.getElementById('registrationForm').addEventListener('submit', handleSubmit);
