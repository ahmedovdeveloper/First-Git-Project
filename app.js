setTimeout(()=> {
  const btn = document.getElementById("btn__wraper");
btn.addEventListener("click", () => {
  const lent = document.getElementById("madal");
  lent.style.display = "block";
});
},3000)

setTimeout(()=> {
  const btn1 = document.getElementById("btn");
btn1.addEventListener("click", () => {
  const lent = document.getElementById("madal");
  lent.style.display = "none";
}); 
},3000)