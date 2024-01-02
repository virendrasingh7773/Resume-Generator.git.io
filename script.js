// webtnfunction
function webtnfunction(){
    let wediv =   document.getElementById("wediv");
    let wetextarea = document.createElement("textarea");
    wetextarea.className = "mt-2 form-control wetextarea"
    wetextarea.rows = "2"
    wetextarea.placeholder = "Enter Heare"
    wediv.appendChild(wetextarea)
}

// acbtnfunction
function acbtnfunction(){
    let acdiv =   document.getElementById("acdiv");
    let actextarea = document.createElement("textarea");
    actextarea.className = "mt-2 form-control actextarea"
    actextarea.rows = "2"
    actextarea.placeholder = "Enter Heare"
    acdiv.appendChild(actextarea)
}

// generate function
function generate(){
  // name
  document.getElementById("rInput1").innerHTML =  document.getElementById("Input1").value;
  document.getElementById("r1Input1").innerHTML =  document.getElementById("Input1").value;
//   contact
document.getElementById("rInput2").innerHTML =  document.getElementById("Input2").value;
// image
let file = document.getElementById("img").files[0];
let reader = new FileReader();
reader.readAsDataURL(file);
reader.onloadend = function veer(){
    document.getElementById("rimg").src = reader.result
}
// Address
document.getElementById("rTextarea1").innerHTML =  document.getElementById("Textarea1").value;
// social links
document.getElementById("rInput3").innerHTML =  document.getElementById("Input3").value;
document.getElementById("rInput4").innerHTML =  document.getElementById("Input4").value;
document.getElementById("rInput5").innerHTML =  document.getElementById("Input5").value;
// objective
document.getElementById("rTextarea2").innerHTML =  document.getElementById("Textarea2").value;
// work experience
let wetextareaArray = document.getElementsByClassName("wetextarea")
let weul = document.getElementById("weul");
for(let i=0;i<wetextareaArray.length;i++){
    let weli = document.createElement("li");
    weli.innerHTML = wetextareaArray[i].value
    weul.appendChild(weli)
}
// Academic Qualification
let actextareaArray = document.getElementsByClassName("actextarea")
let acul = document.getElementById("acul");
for(let i=0;i<wetextareaArray.length;i++){
    let acli = document.createElement("li");
    acli.innerHTML = actextareaArray[i].value
    acul.appendChild(acli)
}
document.getElementById("resume-generator-page").style.cssText = "display:none;"
document.getElementById("result-page").style.cssText = "display:block;"
}

// social-icons and links onclick
function sociallink1(){
    document.getElementById("rInput3").href = document.getElementById("Input3").value;
    document.getElementById("social-icons1").href = document.getElementById("Input3").value;
}
function sociallink2(){
    document.getElementById("rInput4").href = document.getElementById("Input4").value;
    document.getElementById("social-icons2").href = document.getElementById("Input4").value;
}
function sociallink3(){
    document.getElementById("rInput5").href = document.getElementById("Input5").value;
    document.getElementById("social-icons3").href = document.getElementById("Input5").value;
}
// print function
function printfunction(){
    window.print()
}
