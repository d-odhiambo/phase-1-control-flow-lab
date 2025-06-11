const { expect } = require("chai")

function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
    return "This one is on me!";
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return "That will be twenty bucks.";
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
  }
  
  // Write your code here!



function ternaryCheckCity(destinationCity) {
  return destinationCity === 'NYC' ? "Ok, sounds good." : "No go.";
  // Write your code here!
}

function switchOnCharmFromTip(tipGiven) {
  switch (tipGiven) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
  // Write your code here!
