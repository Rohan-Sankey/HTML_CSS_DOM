document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (email === 'sankey901@solutions.com' && password === 'mindset') {
        window.location.href = 'welcome.html';
    } else if (email !== 'sankey901@solutions.com' && password === 'mindset') {
        errorMessage.textContent = 'Invalid email/username';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = 'Invalid password';
        errorMessage.style.color = 'red';
    }
});
