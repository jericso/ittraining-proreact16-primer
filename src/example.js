/* function messageFunction(name, weather) {
  // let message = "Hello, Adam";
  var message = "Hello, Adam";
  if (weather === "sunny") {
    // let message = "It is a nice day";
    var message = "It is a nice day";
    console.log(message);
  } else {
    // let message = "It is " + weather + " today";
    var message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}

messageFunction("Adam", "raining"); */

function myFunc(name) {
  let myLocalVar = "sunny";
  let innerFunction = function () {
    return "Hello " + name + ". Today is " + myLocalVar + ".";
  };
  return innerFunction();
}

console.log(myFunc("Adam"));
