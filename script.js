function submitForm() {
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        city: document.getElementById("city").value
    };

    fetch("http://localhost:8080/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert("User saved successfully!");
    })
    .catch(error => console.error(error));
}

