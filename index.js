
let resetID = document.getElementById("btnReset");

function resetLaps(){
   lapsCompleted = 0;
  countClick.innerText = lapsCompleted;
   location.reload();
}

let countClick = document.getElementById("countid")
let lapsCompleted = 0;
function completeLaps(){
    lapsCompleted += 1;
    countid.innerText = lapsCompleted;
   console.log(lapsCompleted);
}

let saveEl = document.getElementById("save-el")

function Save(){
    
    let savecnt = lapsCompleted + " - " 
    saveEl.textContent += savecnt;
  console.log(lapsCompleted);
}



