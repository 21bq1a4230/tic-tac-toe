var playerCounter = 0;
c11 = document.getElementById("c11");
c12 = document.getElementById("c12");
c13 = document.getElementById("c13");
c21 = document.getElementById("c21");
c22 = document.getElementById("c22");
c23 = document.getElementById("c23");
c31 = document.getElementById("c31");
c32 = document.getElementById("c32");
c33 = document.getElementById("c33");
c11.addEventListener("click", makeMove);
c12.addEventListener("click", makeMove);
c13.addEventListener("click", makeMove);
c21.addEventListener("click", makeMove);
c22.addEventListener("click", makeMove);
c23.addEventListener("click", makeMove);
c31.addEventListener("click", makeMove);
c32.addEventListener("click", makeMove);
c33.addEventListener("click", makeMove);
var b = document.querySelectorAll(".comp");
// var forx = "<h1 style='text-align: center'>X<h1>"
// var foro = "<h1 style='text-align: center'>O<h1>"
var forx = "X";
var foro = "O";
function getIndex(c){
    for(var i=0;i<b.length;i++){
        if(c === b[i]){
            return i+1
        }
    }
}
function makeMove(event){
    if(playerCounter%2 === 0){
        event.target.innerHTML= forx;
        playerCounter += 1;
        console.log(checkForWinner(event,forx));
        console.log(b);
    }
    else{
        event.target.innerHTML = foro;
        playerCounter += 1;
        console.log(checkForWinner(event,foro));
    }
}
function getCoordinates(ele){

    var a = getIndex(ele);
    var r,c;
    if(a<=3){
        r = 1;
        c = a;
    }
    else if(3<a && a<=6){
        r = 2;
        c = a-3;
    }
    else if(6<a && a<=9){
        r = 3;
        c = a-6;
    }
    return [r-1,c-1];
}
function checkForWinner(e,p){
    var arr = [];
    var sarr = [];
    for(var i=0;i<9;i++){
        sarr.push(b[i].innerHTML);
        if((i+1)%3===0){
            arr.push(sarr);
            sarr = [];
        }
    }
    console.log(arr);
    var coord = getCoordinates(e.target);
    var r = coord[0];
    var c = coord[1];
    var count=0;
    console.log(r,c,arr[r][c])
    //checking the horizontal row in which the element is presented
    for(var i=0;i<3;i++){
        if(arr[r][i] === p){
            count += 1;
        }
    }
    if(count === 3){
        return "winner"+" "+p;
    }
    //checking the vertical row in which the element is presented
    for(var i=0;i<3;i++){
        if(arr[i][c] === p){
            count+= 1;
        }
    }
    if(count === 3){
        return "winner"+" "+p;
    }
    //checking the diagonal rows in which the element is presented.
    if(r===c){
        for(var i=0;i<3;i++){
            if(arr[i][i] === p){
                count+= 1
            }
        }
        if(count === 3){
            return "winner"+" "+p;
        }
    }
    else if(r+c == 2){
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                if(i+j === 2 && arr[i][j] === p){
                    count += 1
                }
            }
        }
        if(count === 3){
            return "winner"+" "+p;
        }
    }
}