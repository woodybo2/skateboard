function showAlert() {
    alert('중복 확인 완료');
  }
  var userpwInput = document.getElementById("userpw");
    var pwcheckInput = document.getElementById("pwcheck");
    var pwcheckMessage = document.getElementById("pwcheck-message");

    userpwInput.addEventListener("input", validatePassword);
    pwcheckInput.addEventListener("input", validatePassword);

    function validatePassword() {
      var userpw = userpwInput.value;
      var pwcheck = pwcheckInput.value;

      if (userpw !== pwcheck) {
        pwcheckMessage.textContent = "비밀번호가 일치하지 않습니다.";
        pwcheckMessage.style.color = "red";
      } else {
        pwcheckMessage.textContent = "비밀번호가 일치합니다.";
        pwcheckMessage.style.color = "green";
      }
    }

