const languagesArray = ["html", "css", "javascript", "react", "node.js"];
console.log("Languages Array: " + languagesArray);

console.log("array length: " + languagesArray.length)

languagesArray.push("C#", "php");
console.log("Updated Array: " + languagesArray);

languagesArray.pop();
console.log("Last index removed: " + languagesArray);

languagesArray.unshift("C++");
console.log("Added element to the front: " + languagesArray);

languagesArray.shift();
console.log("Removed first element: " + languagesArray);

var thirdElement = languagesArray[2];
console.log("3rd element in array: " + thirdElement);

var arrayLength = languagesArray.length;
console.log("Final length of the array: " + arrayLength);

var lastItem = languagesArray[languagesArray.length - 1];
console.log("Last item in the array is: " + lastItem);
