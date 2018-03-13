
var arr = [[],[],[]]
var x = 0;
var playerSide = "";
var computerSide = "";
var moveCount = 0;

$('#buttonX').click(function(){
  arr = [[],[],[]];
  playerSide = document.getElementById('buttonX').value;
  computerSide = "o";
  $("#buttonX").remove();
  $("#buttonY").remove();
  document.getElementById("message").innerHTML = "Good luck!";
  setCell(x,y);
});
$('#buttonY').click(function(){
  arr = [[],[],[]];
  playerSide = document.getElementById('buttonY').value;
  computerSide = "x";
  $("#buttonX").remove();
  $("#buttonY").remove();
  document.getElementById("message").innerHTML = "Good luck!";
  setCell(x,y);
});

function setCell(x,y){
  if(x == 0 && y == 0){
    arr[0][0] = playerSide;
    moveCount++;
    document.getElementById("cell00").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);  
  }
  else if(x == 0  && y == 1){
    arr[0][1] = playerSide;
    moveCount++;
    document.getElementById("cell01").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);  
  }
  else if(x == 0 && y == 2){
    arr[0][2] = playerSide;
    moveCount++;
    document.getElementById("cell02").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);  
  }
  else if(x == 1 && y == 0){
    arr[1][0] = playerSide;
    moveCount++;
    document.getElementById("cell10").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);
  }
  else if(x == 1 && y == 1){
    arr[1][1] = playerSide;
    moveCount++;
    document.getElementById("cell11").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);
  }
  else if(x == 1 && y == 2){
    arr[1][2] = playerSide;
    moveCount++;
    document.getElementById("cell12").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);    
  }
  else if(x == 2 && y == 0){
    arr[2][0] = playerSide;
    moveCount++;
    document.getElementById("cell20").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);
  }
  else if(x == 2 && y == 1){
    arr[2][1] = playerSide;
    moveCount++;
    document.getElementById("cell21").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);  
  }
  else if(x == 2 && y == 2){
    arr[2][2] = playerSide;
    moveCount++;
    document.getElementById("cell22").innerHTML = playerSide;
    computer();
    checkWinner(x,y,playerSide);
    }
  }

function computer(){
  
  var randX = Math.floor((Math.random() * 3));
  var randY = Math.floor((Math.random() * 3));
  
  while(arr[randX][randY] === playerSide || arr[randX][randY] == computerSide){
    randX = Math.floor((Math.random() * 3));
    randY = Math.floor((Math.random() * 3));
  }
  arr[randX][randY] = computerSide;
  moveCount++;
  document.getElementById("cell" + randX + randY).innerHTML = computerSide;
  checkWinner(randX, randY, computerSide);
 }

function checkWinner(x,y,side){
  
  //check rows
  for(var i = 0; i < 3; i++){
      if(arr[x][i] !== side){
        break;
      }
      if(i == 2){
        //alert("Player " + side + " wins!");
        resetTable(side);
      }
    }
    
    //check cols
    for(var i = 0; i < 9; i++){
      if(arr[i][y] !== side){
        break;
      }
      if(i == 2){
        //alert("Player " + side + " wins!");
        resetTable(side);
      }
    }
    
    //check diagonals
    if(x == y){
       for(var i = 0; i < 3; i++){
      if(arr[i][i] !== side){
        break;
        }
      if(i == 2){
        //alert("Player " + side + " wins!");
        resetTable(side);
        }
       }
    }
   //check reverse diagonal
   if(x + y == 2){
     for(var i = 0; i < 3; i++){
       if(arr[i][2-i] !== side){
         break;
       }
       if(i == 2){
         //alert("Player " + side + " wins!");
         resetTable(side);
       }
     }
   }
   
    if(moveCount == (Math.pow(3,2))-1){
     alert("draw");
     resetTable(side);
   }
}

function resetTable(side){
  arr = [[],[],[]];
  moveCount = 0;
  for(var i =0; i < 3; i++){
    for(var j =0; j < 3; j++){
      document.getElementById("cell" + i + j).innerHTML = "";
      document.getElementById("score").innerHTML = "Player " + side +" wins!";
    }
  }
}