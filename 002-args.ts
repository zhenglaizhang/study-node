const playAction = process.argv[process.argv.length - 1];
console.log(playAction);
const random = Math.random() * 3;

let computeAction: string;
if (random < 1) {
  computeAction = "rock";
} else if (random > 2) {
  computeAction = "scissor";
} else {
  computeAction = "paper";
}

if (computeAction === playAction) {
  console.log("Equal!!");
} else if (
  (computeAction === "rock" && playAction === "paper") ||
  (computeAction === "scissor" && playAction === "rock") ||
  (computeAction === "paper" && playAction === "scissor")
) {
  console.log("YOU wins!!");
} else {
  console.log("COMPUTER wins!!");
}
