if (Cookies.get("token") != undefined) window.location.href = "/dashboard";

const loginForm = document.getElementById("login-form");

loginForm.onsubmit = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let request = new Request("https://fairfield-programming.herokuapp.com/user/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    });

    fetch(request).then((response) => {

<<<<<<< HEAD
        if (response.status == 200) {

            // get the data
            const data = await response.json();

            // setup the cookie
            const COOKIE_MAX_AGE = 14 * 24 * 60 * 60;
            document.cookie = `token=${data.token} ; path=/ ; max-age=${COOKIE_MAX_AGE} ; httpOnly=true ; secure=true `;

            window.location.href = "/dashboard";
=======
        if (data.status == 200) {
        
            data.json().then((jsonData) => {

                Cookies.set('token', jsonData.token);
                window.location.href = "/dashboard";

            });

        } else if (data.status == 404) {

            displayWarning("Account Not Found.");
>>>>>>> ee554f53d780ea37c80cb3503259cf5bd720f4ef

        } else {

            displayWarning("Incorrect Email or Password.");

        }

    }).catch((error) => {

        displayWarning("Internal Error- Try Reloading the Page.");

    });

    return false;

};

function displayWarning(warningText) {

    var warningBox = document.getElementById("warningBox");

    warningBox.innerHTML = warningText;
    warningBox.style.display = "block";

}