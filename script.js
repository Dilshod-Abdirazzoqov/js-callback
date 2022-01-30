"use strict";

// use of callback
function playFootball(player, callback) {
  console.log(`Name of player is ${player}`);
  callback();
}

playFootball("MoSalah", function () {
  console.log("His shot is 100 goals");
});

//Second way to use
function playFootball(player, callback) {
  console.log(`Name of player is ${player}`);
  callback();
}

function Goals() {
  console.log("His shot is 100 goals");
}

playFootball("Messi", Goals);

//Third way to use
function myCalc(a, b, myCallBack) {
  let sum = a * 4 + b * 5;
  myCallBack(sum);
}

const varCall = myCalc(5, 4, function (sum) {
  console.log(`This is ${sum}`);
});
