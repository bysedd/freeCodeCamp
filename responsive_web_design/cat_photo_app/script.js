const form = document.querySelector("#cat-form");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form submission
    const formData = new FormData(form);
    
    // check if the name contains only letters
    const catName = nameInput.value;
    if (!/^[a-zA-Z]+$/.test(catName)) {
        alert("Please enter a valid name.");
        nameInput.focus();
        return;
    }
    
    // check if age is a number and is between 0 and 40
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 0 || age > 40) {
        alert("Please enter a valid age between 0 and 40.");
        ageInput.focus();
        return;
    }
    
    // form.action = "https://freecatphotoapp.com/submit-cat-photo";
    fetch(form.action, {
        method: "POST",
        body: formData
    }).then(r => {
        if (r.ok) {
            alert("Thank you, your form has been submitted.");
            window.location.reload();
        } else {
            alert("There was a problem submitting your form.");
        }
    });
});