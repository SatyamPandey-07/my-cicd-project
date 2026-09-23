document.addEventListener("DOMContentLoaded", () => {

    console.log("AWS CI/CD website loaded successfully.");

    const status = document.getElementById("status");

    status.addEventListener("click", () => {
        status.textContent = "✓ CI/CD pipeline is working!";
    });

});