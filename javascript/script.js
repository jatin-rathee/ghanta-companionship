function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

var start = document.querySelector(".start");
var login = document.querySelector(".login");
var submit_btn = document.querySelector("#submit_btn");
var login_btn = document.querySelector("#login_btn");
var main_page = document.querySelector(".main_page");

login_btn.addEventListener('click',function() {
  start.style.display = "none";
  login.style.display = "block";
});

submit_btn.addEventListener("click",function() {
  login.style.display = "none";
  main_page.style.display = "block";
});