
var storeS = localStorage.getItem("users");
if (null == storeS) {
    var users = [
        { username: "Medo", password: "12345" },
        { username: "username_here", password: "password_here" },
    ];
    localStorage.setItem("users", JSON.stringify(users));
}
function getUserUsername(e) {
    return JSON.parse(localStorage.getItem("users")).filter((t) => t.username === e);
}
function ceklog() {
    var e = localStorage.getItem("login");
    null != e && "true" == e && document.querySelector(".lgn").classList.add("hidden");
}
function startlog() {
    var e = document.querySelector("#username").value,
        t = document.querySelector("#password").value;
    getUserUsername(e.trim()).length > 0
        ? getUserUsername(e.trim())[0].password == t.trim()
            ? (document.querySelector(".lgn").classList.add("hidden"), localStorage.setItem("login", "true"))
            : (document.querySelector("access").innerHTML = "<p class='red'>Wrong username or password!</p>")
        : (document.querySelector("access").innerHTML = "<p class='red'>User not found!</p>");
}
ceklog();
const show = () => {
    var e = document.querySelector("#password"),
        t = document.querySelector(".icon1"),
        r = document.querySelector(".icon2");
    "password" === e.type ? ((e.type = "text"), (r.style.opacity = "1"), (t.style.opacity = "0")) : ((e.type = "password"), (r.style.opacity = "0"), (t.style.opacity = "1"));
};

