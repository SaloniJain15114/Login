function validation() {
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const errorMassege=document.getElementById("error-Messege");

    if(email === '' || password === ''){
        errorMassege.textContent ='Please fill in both fields!';
        return;
    }

    if(email === '0' && password === 'password123'){
        errorMassege.textContent ='';
        alert('Login successful');
        window.location.href='dashboard.html';
    } else {
        errorMassege.textContect ='Invalid username or password.';
    }
}

    