"strict";
// 1 scuberGreetingForFeet
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2501);
scuberGreetingForFeet(2001);

//TernaryCheckCity
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
ternaryCheckCity("NYC");
ternaryCheckCity("Chicago");

// switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}

switchOnCharmFromTip("generous");
switchOnCharmFromTip("not so generous");
switchOnCharmFromTip("thanks for everything");
// function switchOnCharmFromTip2(tip) {
//   if (tip === "generous") {
//     console.log("Thank you so much.");
//   } else if (tip === "not so generous") {
//     console.log("Thank you");
//   } else console.log("Bye.");
// }
// switchOnCharmFromTip2("generous");
// switchOnCharmFromTip2("not so generous.");
// switchOnCharmFromTip2("thanks for everything");
