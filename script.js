const userinput=document.getElementById("userinput");
const output=document.getElementById("output");
const save=document.getElementById("save");
output.innerHTML=localStorage.getItem("userinput")||"";


save.addEventListener("click",function(){
  const saving=userinput.value;
  localStorage.setItem("userinput",saving);
  output.innerHTML=saving;

})
