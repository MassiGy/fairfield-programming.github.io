const loginForm=document.getElementById("login-form");function displayWarning(e){var n=document.getElementById("warningBox");n.innerHTML=e,n.style.display="block"}loginForm.onsubmit=()=>{const e=document.getElementById("email").value,n=document.getElementById("password").value;let o=new Request("https://fairfield-programming.herokuapp.com/user/login",{method:"POST",body:JSON.stringify({email:e,password:n}),headers:new Headers({"Content-Type":"application/json"})});return fetch(o).then((e=>{200==e.status?e.json().then((e=>{Cookies.set("token",e.token),window.location.href="/dashboard"})):404==e.status?displayWarning("Account Not Found."):displayWarning("Incorrect Email or Password.")})).catch((e=>{displayWarning("Internal Error- Try Reloading the Page.")})),!1};
//# sourceMappingURL=index.b2393505.js.map
