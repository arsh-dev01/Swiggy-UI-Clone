let SignUpHTML = `<link rel="stylesheet" href="../SignUp/signupsytle.css">
        <div class="singup">
          <div class="icon">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#000000"
              fill="none"
            >
              <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
              <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
            </svg>
          </div>
          <div class="top">
            <div class="hadding">
              <h1>Login</h1>
              <h6>or<span>Create an account</span></h6>
            </div>
            <img src="../Swiggy Images/NavIcons/roll.png" alt="" />
          </div>
          <div class="bottom">
            <input type="number" class="number" placeholder="Phone Number" />
            <button>Login</button>
            <span
              >By clicking on login , I accept the terms and conditions and
              Privacy Policy</span
            >
          </div>
        </div>
      `;
document.querySelector(".SingBody").innerHTML = SignUpHTML;

let singup = document.querySelector(".singBtn");
console.log(singup);

singup.addEventListener("click", () => {
  document.querySelector(".SingBody").style.display = "flex";
});
let CancelBtn = document.querySelector(".icon");
console.log(CancelBtn);
CancelBtn.addEventListener("click", (e) => {
  document.querySelector(".SingBody").style.display = "none";
});
