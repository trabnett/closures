// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   var num = -1
//   var roll = list[num]

//   return function() {
//   num += 1
//   return list[num]
//   }
// }

// var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());
// console.log(rollLoadedDie());

var countdownGenerator = function (x) {
  var num = x
  return function(){
    if (num > 0) {
      console.log("T-minus " + num)
      num -= 1
    }
    else if (num === 0) {
      console.log("Blast Off!")
      num -= 1
    }
    else {
      console.log("Rockets already gone, bub!")
    }

  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!