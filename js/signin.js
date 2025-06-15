document.querySelector("form").addEventListener("submit", function(e) {
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {
        e.preventDefault(); // stop form from submitting
        alert("Please fill in both email and password.");
    }
});