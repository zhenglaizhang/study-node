module.exports = function(playAction: string): number {
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
    return 0;
  } else if (
    (computeAction === "rock" && playAction === "paper") ||
    (computeAction === "scissor" && playAction === "rock") ||
    (computeAction === "paper" && playAction === "scissor")
  ) {
    console.log("YOU wins!!");
    return 1;
  } else {
    console.log("COMPUTER wins!!");
    return 2;
  }
};
