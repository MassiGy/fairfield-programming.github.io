const signupForm = document.getElementById("signup-form");

signupForm.onsubmit = () => {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // let request = new Request("https://fairfield-programming.herokuapp.com/user/signup", {
    let request = new Request("http://localhost:8080/user/signup", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
            username
        }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    });

    fetch(request).then(async (response) => {

        if (response.status == 200) {
            // get the data
            const data = await response.json();

            // setup the cookie
            const COOKIE_MAX_AGE = 14 * 24 * 60 * 60;
            document.cookie = `token=${data.token} ; path=/ ; max-age=${COOKIE_MAX_AGE} ; httpOnly=true ; secure=true `;

            alert("Email has been sent to you, Please view it to validate your email address. ( The email will expire in 4 days )");
            window.location.href = "/dashboard";

        } else if (response.status == 403) {

            displayWarning("Account Already Exists.");

        } else {

            displayWarning("Invalid Username, Email or Password.");

        }

    }).catch((error) => {
        console.log(error);

        displayWarning("Internal Error- Try Reloading the Page.");

    });

    return false;

};

function displayWarning(warningText) {

    var warningBox = document.getElementById("warningBox");

    warningBox.innerHTML = warningText;
    warningBox.style.display = "block";

}