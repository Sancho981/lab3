//Variant 1
for (let i = 0; i < 8; i++) {
      let space = ''

      for (let k = 0; k < 8; k++) {
        space += (i + k) % 2 === 0 ? '  ' : '#'
      }

      console.log(space)
      space = ''
    }


//Variant 2
function ChessBoard(num) {
    var board = "";
    for (var i = 1; i < num*num; i += 1) {
      if ((i % (num + 1)) == 0) {
        board += "\n";
      } 
      else if (i % 2 != 0) {
        board += "#";
      } 
      else {
        board += " ";
      }
    }
    return board;
  }
  console.log(ChessBoard(8));

//Variant 3
function Board(a, b) {
    var val1 = "# ";
    var val2 = " #";
    var space1 = "";
    var space2 = "";
    for (var i = 0; i < a / 1; i += 1) {
      space1 += val1;
      space2 += val2;
    }
  
    for (var t = 0; t < b; t += 1) {
      if (t % 2 != 0) {
        console.log(space1);
      } else {
        console.log(space2);
      }
    }
  }
  Board(8, 8);
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("word");
  } 
  else {
    console.log(i);
  }

"" + 1 + 0; //10 string
"" - 1 + 0 //-1 number
true + false //1 number
6 / "3" //2 number
"2" * "3" //6 number
4 + 5 + "px" //9px string
"$" + 4 + 5 //$45 string
"4" - 2 //2 number
"4px" - 2 //NaN number
7 / 0 //Infinity number
"  -9\n" + 5 //-9 string
//            5     
"  -9\n" - 5 //-14 number
5 && 2 //2 number
2 && 5 //5 number
5 || 0 //5 number
0 || 5 //5 number
null + 1 //1 number
undefined + 1 //NaN number
null == "\n0\n" //false boolean(logical)
+null == +"\n0\n" //true boolean(logical)
