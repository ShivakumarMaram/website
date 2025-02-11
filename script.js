document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let occupation = document.getElementById("occupation").value;
    let education = document.getElementById("education").value;
    let medical = document.getElementById("medical").value;

    if (name && email && occupation) {
        document.getElementById("responseMessage").innerText = "Survey submitted successfully!";
        document.getElementById("responseMessage").style.color = "green";

        // Here, you can send data to a backend server
        console.log({
            name: name,
            email: email,
            occupation: occupation,
            education: education,
            medical: medical
        });
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all required fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
