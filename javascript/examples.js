heading = document.getElementById("benefit_heading");
heading.innerHTML = "Semantics Benefits altered by Javascript";

heading.style.color ="green";

heading.innerText = "Links to related items"; // plain text markup (text (<p>This is a paragragh</p>))
heading.innerText = "Links related items"; // plain text
title.textContent = 

// getElementByTagName - p, h1, form, table
// getElementByClass - class_name
// querySelector('p')

function changeImage(item){
    item.src = "..\basic\images\forest.jpg";
}


function changeColor(element){
    element.style.color = "yellow";
}


function changeBackgroundColor(item){
    item.style.backgroundColor ="purple";
}