let result = document.querySelector("h2");
let checkBond = document.querySelector("button");

checkBond.addEventListener("click", ()=>{
    let name1 = document.querySelector("#text1").value;
    let name2 = document.querySelector("#text2").value;
  
        let bond = (Math.floor(Math.random() * 100) +1);
result.innerHTML = `${name1} and ${name2} has ${bond}% bond`; 
    
});
let body = document.querySelector('body');
let container = document.querySelector('.container');
let input = document.querySelector('input');
let modeChange = document.querySelector('#mode');

function changeMood(){
    if(modeChange.innerText === "🌙"){
        body.style.backgroundColor = '#1e1e2f';
        container.style.background = '#2b2d42';
        input.style.backgroundColor = '#edf2f4';
        checkBond.style.backgroundColor= '#ef233c';
        result.style.color = '#ffffff';
        modeChange.style.background = '#2b2d42';
        modeChange.innerText = "🔆";
    }
    else{
        body.style.backgroundColor = '#ffffff';
        container.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)';
        input.style.backgroundColor = '#ffffff';
        checkBond.style.backgroundColor= '#593d91';
        result.style.color = 'black';
        modeChange.style.background = '#ff9a9e';
        modeChange.innerText = "🌙";
    }
}