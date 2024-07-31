document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login functionality here
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login:', email, password);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add signup functionality here
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    console.log('Signup:', name, email, password, phone);
});
