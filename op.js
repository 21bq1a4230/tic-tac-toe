var turn = 0;
c11 = document.getElementById("c11");
c12 = document.getElementById("c12");
c13 = document.getElementById("c13");
c21 = document.getElementById("c21");
c22 = document.getElementById("c22");
c23 = document.getElementById("c23");
c31 = document.getElementById("c31");
c32 = document.getElementById("c32");
c33 = document.getElementById("c33");
c12.addEventListener("click", makeMove);
c13.addEventListener("click", makeMove);
c21.addEventListener("click", makeMove);
c22.addEventListener("click", makeMove);
c23.addEventListener("click", makeMove);
c11.addEventListener("click", makeMove);
c31.addEventListener("click", makeMove);
c32.addEventListener("click", makeMove);
c33.addEventListener("click", makeMove);
var one = "X";
var two = "O";
var x = 1;
var o = 2;
var over = "over";
var game = "";
function makeMove(e){
    tar = e.target;
    var barr = Array.from(b);
    var ind = barr.indexOf(tar);
    if(game != over){
        if(turn%2===0){
            tar.innerHTML = one;
            turn++;
            checkForWinner(one ,e);
            
        }
        else{
            tar.innerHTML = two;
            turn++;
            checkForWinner(two , e);
        }
    }
}
var b = document.querySelectorAll(".comp");
function checkForWinner(p,e){
    var lt = [];
    var boardarr = [];
    var barr = Array.from(b);
    for(var i=0;i<9;i++){
        lt.push(b[i]);
        if((i+1)%3===0){
            boardarr.push(lt);
            lt = [];
        }
    }
    var i=0,j=0;
    console.log(barr);
    var ind = barr.indexOf(e.target);
    if(ind < 3){
        i = 0;
        j = ind;
    }
    else if(ind>=3 && ind < 6){
        i = 1;
        j = ind - 3;
    }
    else if(ind>=6 && ind < 9){
        i = 2;
        j = ind - 6;
    }
    if(rowCrossed(i,j,boardarr,p) || columnCrossed(i,j,boardarr,p) || diagonalCrossed(i,j,boardarr,p)){
        gameOver(e,p);
    }
    // else if(tiehappend()){
    //     gameTied();
    // }
}
function rowCrossed(i,j,array,turn){
    if(array[i][0].innerHTML === turn && array[i][1].innerHTML === turn && array[i][2].innerHTML === turn){
        return true;
    }
    else{
        return false;
    }
}
function columnCrossed(i,j,array,turn){
    if(array[0][j].innerHTML === turn && array[1][j].innerHTML === turn && array[2][j].innerHTML === turn){
        return true;
    }
    else{
        return false;
    }
}
function diagonalCrossed(i,j,array,turn){
    if(i===j){
        for(var i=0;i<3;i++){
            if(array[i][i].innerHTML !== turn){
                return false;
            }
        }
        return true;
    }
    if(i+j === 2){
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                if(i+j === 2 && array[i][j].innerHTML !== turn){
                    return false;
                }
            }
        }
        return true;
    }
}
// function tiehappend(array){
//     for(var i=0;i<3;i++){
//         for(var j=0;j<3;j++){
//             if(array[i][j].innerHTML !== one || array[i][j].innerHTML !== two){
//                 return false;
//             }   
//         }
//     }
//     return true;
// }
function gameOver(event,turn){
    console.log("player "+turn+" won");
    game = over;
    var win = document.getElementById("win");
    console.log(win);
    win.innerHTML = "<h1> player "+turn+" WON !!!<br> CONGRATULATIONS</h1>"
}
function gameTied(event){
    console.log("game not tied");
}