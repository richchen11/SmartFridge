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
    },
    {
        name: "Jimmy",
        pass: "doesntmatter",
        img: "../images/profile/default.bmp",
        sex: "M",
        age: "14",
        height: "5'5\"",
        weight: "145",
        color: "6"
    }
]

let colors = [ "#c51111", "#ef7d0d", "#f5f557", "#50ef39", "#117f2d", "#b6c0d0",
               "#00d1b2", "#132ed1", "#6b2fbb", "#ed54ba", "#71491e", "#3f47fe"]

function update() {
  let username = document.getElementById("userSel").value;

  console.log(username)
  // lookup user-pass in hash and log in
  for (i = 0; i < user_data.length; i++) {
    u = user_data[i].name;
    if (u == username) {
      console.log(username + " logged in");
      window.location.replace("tablet_settings.html?u="+i);
    }
  }
}

function isLoggedIn() {
  var qs = new URLSearchParams(window.location.search);
  var u = qs.get("u");

  if (u) {
    displayUser(u);
  } else {
    window.location.replace("tablet_settings_login.html");
  }
}

function displayUser(i) {
  // display profile picture
  let pic = document.getElementById("profile-img");
  pic.src = user_data[i].img;

  // highlight current user in dropdown
  let opt = document.getElementById(user_data[i].name);
  opt.setAttribute('selected', 'true');

  // display health info
  let s = document.getElementById("sex");
  let a = document.getElementById("age");
  let ht = document.getElementById("ht");
  let wt = document.getElementById("wt");

  var htText = "Height: " + user_data[i].height;
  var wtText = "Weight: " + user_data[i].weight;
  var sText = "Sex: " + user_data[i].sex;
  var aText = "Age: " + user_data[i].age;

  ht.appendChild(document.createTextNode(htText));
  wt.appendChild(document.createTextNode(wtText));
  s.appendChild(document.createTextNode(sText));
  a.appendChild(document.createTextNode(aText));

  // display lists associated with user
  let l1 = document.getElementById("johnList");
  let l2 = document.getElementById("janeList");
  let l3 = document.getElementById("jimmyList");

  if (user_data[i].name == 'John') {l2.remove(); l3.remove();}
  if (user_data[i].name == 'Jane') {l3.remove();}
  if (user_data[i].name == 'Jimmy') {l1.remove(); l2.remove();}
}
