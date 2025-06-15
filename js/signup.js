document.getElementById("su-box").addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (!this.checkValidity()) {
        return;
    }

    const pass = document.getElementById("pass").value;
    const confirm = document.getElementById("confirm-pass").value;

    if (pass !== confirm) {
        alert("Your password does not match.");
        return;
    }

    window.location.href = "home.html";
});