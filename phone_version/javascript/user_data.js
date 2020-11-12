let user_data = [
    {
        name: "John",
        pass: "Password1",
        img: "../images/profile/john.bmp",
        sex: "M",
        age: "48",
        height: "5'11\"",
        weight: "170",
        color: "6"
    },
    {
        name: "Jane",
        pass: "hunter2",
        img: "../images/profile/jane.bmp",
        sex: "F",
        age: "47",
        height: "5'4\"",
        weight: "145",
        color: "6"
    }
]

let colors = [ "#c51111", "#ef7d0d", "#f5f557", "#50ef39", "#117f2d", "#b6c0d0",
               "#00d1b2", "#132ed1", "#6b2fbb", "#ed54ba", "#71491e", "#3f47fe"]

function logIn() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log(username)
  console.log(password)
  // lookup user-pass in hash and log in
  for (i = 0; i < user_data.length; i++) {
    u = user_data[i].name;
    p = user_data[i].pass;
    if (u == username && p == password) {
      console.log(username + " logged in");
      window.location.replace("phone_settings.html?u="+i);
    }
  }
  alert("Invalid login!");
}

function isLoggedIn() {
  var qs = new URLSearchParams(window.location.search);
  var u = qs.get("u");
  var n = qs.get("n");
  if (u) {
      displayUser(u);
      setData(true);
  } else if (n) {
      generateUser(n);
      setData(false);
  } else {
    window.location.replace("phone_settings_login.html");
  }
}

function displayUser(i) {
  let pic = document.getElementById("profile-img");
  pic.src = user_data[i].img;

  let cap = document.getElementById("profile-name");
  var capText = document.createTextNode(user_data[i].name);
  cap.appendChild(capText);
}

function generateUser(n) {
  let pic = document.getElementById("profile-img");
  pic.src = "../images/profile/default.bmp";

  let cap = document.getElementById("profile-name");
  var capText = document.createTextNode(n);
  cap.appendChild(capText);

  alert("Saving new users is not implemented.\nThis profile is temporary.");
}

function createUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let verify = document.getElementById("verify").value;
  var text = null;

  if (password != verify) {
    alert("Passwords must match.");
    console.log("Passwords must match.");
    return;
  }

  // var new_user = {
  //   name: username,
  //   pass: password,
  //   img: "../images/spaghetti.png",
  //   height: null,
  //   weight: null,
  //   color: 6
  // }

  // alert("New user created. (Not implemented in prototype)");
  window.location.replace("phone_settings.html?n="+username);
}

function setColor(n) {
  document.getElementById("hero").style.backgroundColor = colors[n];
  document.getElementById("logout").style.color = colors[n];

  document.getElementById("health").style.backgroundColor = colors[n];
  document.getElementById("edit").style.color = colors[n];
  document.getElementById("sex").style.borderColor = colors[n];
  document.getElementById("age").style.borderColor = colors[n];
  document.getElementById("ht").style.borderColor = colors[n];
  document.getElementById("wt").style.borderColor = colors[n];


  document.getElementById("pref").style.backgroundColor = colors[n];
  document.getElementById("c1").style.borderColor = colors[n];
  document.getElementById("c2").style.borderColor = colors[n];
}

function setData(isExistingUser) {
  var qs = new URLSearchParams(window.location.search);
  var i = qs.get("u");

  let sP = qs.get("s");
  let aP = qs.get("a");
  let htP = qs.get("h");
  let wtP = qs.get("w");

  let s = document.getElementById("sex");
  let a = document.getElementById("age");
  let ht = document.getElementById("ht");
  let wt = document.getElementById("wt");

  var htText = "Height: -", wtText = "Weight: -", sText = "Sex: -", aText = "Age: -";

  if (isExistingUser) {
    htText = "Height: " + user_data[i].height;
    wtText = "Weight: " + user_data[i].weight;
    sText = "Sex: " + user_data[i].sex;
    aText = "Age: " + user_data[i].age;
  }
  if (sP) {sText = "Sex: " + sP;}
  if (aP) {aText = "Age: " + aP;}
  if (htP) {htText = "Height: " + htP;}
  if (wtP) {wtText = "Weight: " + wtP;}
  ht.appendChild(document.createTextNode(htText));
  wt.appendChild(document.createTextNode(wtText));
  s.appendChild(document.createTextNode(sText));
  a.appendChild(document.createTextNode(aText));
}

var modal = document.getElementById("editModal");
var btn = document.getElementById("edit");
var close = document.getElementById("close");
btn.onclick = function() {
  modal.style.display = "block";
}
close.onclick = function() {
  modal.style.display = "none";
}

function reloadWithEdit() {
  var qs = new URLSearchParams(window.location.search);
  var u = qs.get("u");
  var n = qs.get("n");
  var s = qs.get("s");
  var a = qs.get("a");
  var h = qs.get("h");
  var w = qs.get("w");


  let sN = document.getElementById("a").value;
  let aN = document.getElementById("b").value;
  let hN = document.getElementById("c").value;
  let wN = document.getElementById("d").value;

  let pStr = "";
  if (u) {pStr = pStr + "?u=" + u}
  if (n) {pStr = pStr + "?n=" + n}
  if (sN) {pStr = pStr + "&s=" + sN}
  else if (s) {pStr = pStr + "&s=" + s}
  if (aN) {pStr = pStr + "&a=" + aN}
  else if (a) {pStr = pStr + "&a=" + a}
  if (hN) {pStr = pStr + "&h=" + hN}
  else if (h) {pStr = pStr + "&h=" + h}
  if (wN) {pStr = pStr + "&w=" + wN}
  else if (w) {pStr = pStr + "&w=" + w}

  window.location.replace("phone_settings.html" + pStr);
}
