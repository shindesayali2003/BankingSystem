// Login

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerId = document.getElementById("customerId").value;
    const password = document.getElementById("password").value;

    // Demo credentials
    if (customerId === "admin" && password === "1234") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboardPage").style.display = "block";
    } else {
        alert("Invalid Customer ID or Password!");
    }
});


// Logout

function logout() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

    document.getElementById("loginForm").reset();
}


// Show Dashboard Sections

function showSection(sectionId) {

    const sections = document.querySelectorAll(".content-section");

    sections.forEach(function (section) {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");

    // Update active navigation
    const navLinks = document.querySelectorAll(".sidebar nav a");

    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
}


// Money Transfer

const transferForm = document.getElementById("transferForm");

transferForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const beneficiary =
        document.getElementById("beneficiary").value;

    const amount =
        Number(document.getElementById("transferAmount").value);

    const balanceElement =
        document.getElementById("balance");

    const currentBalance = 85450;

    if (amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (amount > currentBalance) {
        alert("Insufficient balance!");
        return;
    }

    alert(
        "Transfer successful!\n\n" +
        "Beneficiary: " + beneficiary +
        "\nAmount: ₹" + amount.toLocaleString("en-IN")
    );

    transferForm.reset();
});
