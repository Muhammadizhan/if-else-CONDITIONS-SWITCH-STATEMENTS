// function checkDivisibility() {
//     var number = document.getElementById("inputNumber-1").value;
//     var resultMessage = document.getElementById("result-1");

//     if (number % 3 === 0) {
//         resultMessage.textContent = "Number is divisible by 3";
//     } else {
//         resultMessage.textContent = "Number is not divisible by 3";
//     }
// }

//     // Question -02

//     document.getElementById("checkButton").addEventListener("click", function() {
//         var number = parseInt(document.getElementById("inputNumber-2").value);
//         var resultMessage = document.getElementById("result-2");

//         if (number % 2 === 0) {
//             resultMessage.textContent = "The number is even";
//         } else {
//             resultMessage.textContent = "The number is odd";
//         }
//     });

// Question -03

// document.getElementById("checkButton").addEventListener("click", function() {
//     var age = parseInt(document.getElementById("ageInput").value);
//     var resultMessage = document.getElementById("result");

//     if (age > 18) {
//         resultMessage.textContent = "Old enough";
//     } else {
//         resultMessage.textContent = "Too young";
//     }
// });

// Question -04

// function checkName() {
//     var name = document.getElementById("nameInput").value;

//     if (name === "IzhanAyaz") {

//       alert("Hello, it's you!");
//     }
//   }

//Question -05

// function checkDivisibility() {
//   var number = document.getElementById("number").value;
//   number = parseInt(number);
//   if (number % 3 === 0) {
//     alert("Number is divisible by 3");
//   } else {
//     alert("Number is not divisible by 3");
//   }
// }

//question -06

// function checkCharacter() {
//   var character = document.getElementById("charInput").value;

//   if (!isNaN(character)) {
//     alert("Input is a number");
//   } else if (character === character.toUpperCase()) {
//     alert("Input is an uppercase letter");
//   } else if (character === character.toLowerCase()) {
//     alert("Input is a lowercase letter");
//   } else {
//     alert("Input is neither a number nor a letter");
//   }
// }

// Question -07
// function calculate() {
//   var num1 = parseFloat(document.getElementById("num1").value);
//   var num2 = parseFloat(document.getElementById("num2").value);
//   var operator = document.getElementById("operator").value;
//   var result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 % num2;
//       break;
//     default:
//       result = "Invalid operator";
//   }

//   document.getElementById("result").innerHTML = result;
// }
// Question -08

function convertTime() {
  var inputTime = document.getElementById("time").value;
  var hour = parseInt(inputTime.substring(0, 2));
  var minute = inputTime.substring(2);
  var convertedHour;
  var ampm;

  if (hour === 0) {
    convertedHour = 12;
    ampm = "AM";
  } else if (hour < 12) {
    convertedHour = hour;
    ampm = "AM";
  } else if (hour === 12) {
    convertedHour = 12;
    ampm = "PM";
  } else {
    convertedHour = hour - 12;
    ampm = "PM";
  }

  var convertedTime = convertedHour + ":" + minute + " " + ampm;
  document.getElementById("convertedTime").innerText =
    "Converted Time: " + convertedTime;
}
