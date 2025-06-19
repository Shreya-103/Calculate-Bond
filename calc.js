let result = document.querySelector("h2");
let checkBond = document.querySelector("button");

checkBond.addEventListener("click", ()=>{
    let name1 = document.querySelector("#text1").value;
    let name2 = document.querySelector("#text2").value;
  
        let bond = (Math.floor(Math.random() * 100) +1);
result.innerHTML = `${name1} and ${name2} has ${bond}% bond`; 
    
});