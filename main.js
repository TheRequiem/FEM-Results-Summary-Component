import data from "./data.json" assert { type: "json" };

const reaction = document.getElementById("reaction-title");
const reactionIcon = document.getElementById("reaction-icon");
const reactionScore = document.getElementById("reaction-score");

const memory = document.getElementById("memory-title");
const memoryIcon = document.getElementById("memory-icon");
const memoryScore = document.getElementById("memory-score");

const visual = document.getElementById("visual-title");
const visualIcon = document.getElementById("visual-icon");
const visualScore = document.getElementById("visual-score");

const verbal = document.getElementById("verbal-title");
const verbalIcon = document.getElementById("verbal-icon");
const verbalScore = document.getElementById("verbal-score");

reaction.innerHTML = data[0].category;
reactionIcon.src = data[0].icon;
reactionScore.innerHTML = data[0].score + " ";

memory.innerHTML = data[1].category;
memoryIcon.src = data[1].icon;
memoryScore.innerHTML = data[1].score + " ";

visual.innerHTML = data[2].category;
visualIcon.src = data[2].icon;
visualScore.innerHTML = data[2].score + " ";

verbal.innerHTML = data[3].category;
verbalIcon.src = data[3].icon;
verbalScore.innerHTML = data[3].score + " ";
