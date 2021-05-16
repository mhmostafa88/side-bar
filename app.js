const toggleBtn = document.querySelector(".sidebar-toggle");
const closeeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click",function(){
console.log(sidebar.classList);
sidebar.classList.toggle("show-sidebar");
})