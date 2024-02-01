function register(){
    var firstNameValue = document.getElementById("firstNameIn").value;
    var lastNameValue = document.getElementById("lastNameIn").value;
    var emailValue = document.getElementById("emailIn").value;
    var passwordValue = document.getElementById("passwordIn").value;

    // Update output paragraphs
    document.getElementById("outFirstName").textContent = "First Name: " + firstNameValue;
    document.getElementById("outLastName").textContent = "Last Name: " + lastNameValue;
    document.getElementById("outEmail").textContent = "Email: " + emailValue;
    document.getElementById("outPassword").textContent = "Password: " + passwordValue;
}