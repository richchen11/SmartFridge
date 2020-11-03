let user_data = [
    {
        name: "John",
        pass: "Password1",
        img: "../images/profile/john.bmp",
        height: "71",
        weight: "170",
        color: "6"
    },
    {
        name: "Jane",
        pass: "hunter2",
        img: "../images/profile/jane.bmp",
        height: "64",
        weight: "145",
        color: "6"
    }
]

function logIn() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log(username)
  console.log(password)
  // lookup user-pass in hash and log in
  for (i = 0; i < user_data.length; i++) {
    u = user_data[i].name;
    p = user_data[i].pass;
    console.log(u + ": " + p)
    if (u == username && p == password) {
      console.log(username + " logged in");
      window.location.replace("phone_settings.html?user="+i);
    }
  }
}

function isLoggedIn() {
  var qs = new URLSearchParams(window.location.search);
  var v = qs.get("user");
  console.log(v);
  if (v) {
      displayUser(v);
  } else {
    window.location.replace("phone_settings_login.html");
  }
}

function displayUser(i) {
  console.log(i);
  console.log(user_data[i]);

  let pic = document.getElementById("profile-img");
  pic.src = user_data[i].img;

  let cap = document.getElementById("profile-name");
  var capText = document.createTextNode(user_data[i].name);
  cap.appendChild(capText);

  let ht = document.getElementById("ht");
  let wt = document.getElementById("wt");

  var feet = Math.floor(user_data[i].height / 12);
  var inch = user_data[i].height - feet*12;
  var htText = document.createTextNode("Height: " + feet + "\'" + inch + "\"");
  var wtText = document.createTextNode("Weight: " + user_data[i].weight + " lbs");

  ht.appendChild(htText);
  wt.appendChild(wtText);
}

function createUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let verify = document.getElementById("verify").value;
  var text = null;

  if (password != verify) {
    var warning = document.getElementById("warning");

    if (text) {warning.removeChild(text);}

    text = document.createTextNode("Passwords must match.");
    warning.appendChild(text);

    console.log("Passwords don't match");
    return;
  }

  var new_user = {
    name: username,
    pass: password,
    img: "../images/spaghetti.png",
    height: null,
    weight: null,
    color: 6
  }

  user_data.push(new_user);

  let i = user_data.length - 1;

  var warning = document.getElementById("warning");
  if (text) {warning.removeChild(text);}
  text = document.createTextNode("Not yet implemented.");
  warning.appendChild(text);


  // NOT YET IMPLEMENTED
  // window.location.replace("phone_settings.html?user="+i);
}

function setColor(n) {
  var qs = new URLSearchParams(window.location.search);
  var v = qs.get("user");

  user_data[v].color = n;
}
