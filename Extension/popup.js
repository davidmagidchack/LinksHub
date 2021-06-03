if (localStorage.getItem("token") === null) {
  login();
  $("a").click(function () {
    chrome.tabs.create({ url: "" });
  });
} else {
  $(".login").hide();
  $("#success").text("LinksHub.");
  $("#logout").click(function () {
    localStorage.removeItem("token");
    login();
  });
  $("#dashboard").click(function () {
    chrome.tabs.create({ url: "http://localhost:8000/" });
  });
  $("#save").click(function () {
  save_site();
  })
}

function save_site(){
  $(".logged").hide();
  $("form.tree").submit(function () {
  logedin();
  })
}

function login() {
  $(".logged").hide();
  $("form.ajax").submit(function () {
    var email = $("#email").val();
    var pass = $("#password").val();
    if (email === "" || pass === "") {
      $("#error").text("please enter email or password");
    }
    sendReq(email, pass);
    event.preventDefault;

    return false;
  });
}
function sendReq(email,pass) {
  console.log("received req for login");
  $.ajax({
    type: "POST",
    url: "http://localhost:8000/api/login/",
    data: {
      'username': email,
      'password': pass
    },
    dataType: "json",
    success: function (response) {
      localStorage.setItem("token", response["token"]);
      logedin();
    },
  });
  console.log()
}
function logedin() {
  $(".login").hide();
  $("#success").text("user logged in successfull");
  
}


