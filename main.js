document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in both fields');
        return;
    }

    // Proceed with form submission or validation
    console.log('Username:', username);
    console.log('Password:', password);
});

document.querySelector('.btn-secondary').addEventListener('click', function() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
