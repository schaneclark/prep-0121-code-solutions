function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log("addTwoNumbers function: " + addTwoNumbersResult);


function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hoursToMinsResult = convertHoursToMinutes(3);
console.log("convertHoursToMinutes Exercise: " + hoursToMinsResult);


function personalizedGreeting(name) {
 return "Hello " + name + "!";
}

var greeting = personalizedGreeting("Cody");
console.log("personalizedGreeting Example: " + greeting);

function returnDatatype(data) {
  return typeof data;
}
var datatype = returnDatatype(1072);
console.log("returnDatatype Exercise: " + datatype);


function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultBy5Result = addAndMultiplyBy5(10,5);
console.log("addAndMultiplyBy5 Exercise: " + addAndMultBy5Result);


function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multAndDivBy5Result = multiplyAndDivideBy5(35,10);
console.log("multiplyAndDivideBy5 Exercise: " + multAndDivBy5Result);


function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log("subtractTwoNumbers Exercise: " + subtractTwoNumbersResult);


function getCircleCircumference(radius) {
  return Math.PI * 2 * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log("getCircleCircumference Exercise: " + getCircleCircumferenceResult);


function returnFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
var fullName = returnFullName("Juan", "Ramirez");
console.log("returnFullName Exercise: " + fullName);


function cubeNumber(number) {
  return Math.pow(number, 3);
}
var cubedResult = cubeNumber(5);
console.log("cubeNumber Exercise: " + cubedResult);


function returnMathSentence(num1, num2) {
  return `if you add ${num1} and ${num2} together you get ${num1 + num2}`;
}
var mathSentence = returnMathSentence(5, 12);
console.log("returnMathSentence Exercise: " + mathSentence);
