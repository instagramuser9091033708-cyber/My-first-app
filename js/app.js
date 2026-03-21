// Login function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === "") {
        alert("Please fill all fields!");
        return;
    }

    // fake login (for now)
    if(user === "admin" && pass === "1234") {
        localStorage.setItem("user", user);
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Username or Password!");
    }
}

// Auto login check
if(localStorage.getItem("user") && window.location.pathname.includes("index.html")) {
    window.location.href = "dashboard.html";
}
