const display = document.getElementById("display");
const previous_score = document.getElementById("prevscore");

let score=0 ;

function updatedisplay(){
    display.value = score;
}

document.getElementById("+1").onclick = function(){
    score += 1;
    updatedisplay();
    document.getElementById("prevscore").innerHTML = "1";
}
document.getElementById("+2").onclick = function(){
    score += 2;
    updatedisplay();
    document.getElementById("prevscore").innerHTML = "2";
}
document.getElementById("+3").onclick = function(){
    score += 3;
    updatedisplay();
    document.getElementById("prevscore").innerHTML = "3";
}
document.getElementById("+4").onclick = function(){
    score += 4;
    updatedisplay();
    document.getElementById("prevscore").innerHTML = "4";
}
document.getElementById("+6").onclick = function(){
    score += 6;
    updatedisplay();
    document.getElementById("prevscore").innerHTML = "6";
}
document.getElementById("wide").onclick = function(){
    score += 1;
    updatedisplay();
    document.getElementById("prevscore").innerHTML = "1";
}


const overdisplay = document.getElementById("overdisp");
let over = 0;
let count = 0;

function overdisplayupdate(){
    overdisplay.value = over.toFixed(1);
}

document.getElementById("b+").onclick = function(){
    if (count<5){
        over += 0.1;
        count ++;
    }
    else{
        over += 0.5;
        count=0
    }
    overdisplayupdate()
}


document.getElementById("clear").onclick = function() {
    score = 0;
    over = 0;
    updatedisplay()
    overdisplayupdate()
    
}

updatedisplay()
overdisplayupdate()