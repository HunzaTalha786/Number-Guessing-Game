let guessNum=Math.floor(Math.random()*100)+1;
let attempt=0;



function result(){
    let userNum = document.getElementById('number').value ;
    let comment =document.getElementById('comment');
    attempt++;

    if(userNum===guessNum){
        comment.textContent=`Congratulations! you gussed the number.`;
        comment.style.color="green";   
    }
    else if(userNum===""){
        comment.textContent=`Error! Enter your number`;
        comment.style.color="red";
    }
    else if(userNum>guessNum){
        comment.textContent=`Too high! Try again`;
        comment.style.color="orange";   
    }

    else if(userNum<guessNum){
        comment.textContent=`Too low! Try again`;
        comment.style.color="blue";
    }
    

    document.getElementById('attempts').textContent=`Attempts: ${attempt}`;
}

function restart(){
     attempt=0;
    document.getElementById('number').value="" ;
    document.getElementById('comment').textContent="";
    document.getElementById('attempts').textContent="Attempts: 0;"
}

