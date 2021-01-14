// Project Variables 
let gameEngine = document.getElementById("game-engine");
let awebot = document.getElementById("awebot");
let personalSite = document.getElementById("personal-site");
let gitlet = document.getElementById("gitlet");

// Conditions States
let skillcount = {"html":0, "css":0, "java":0, "python":0, "js":0, "git":0, "api":0};
let projecton = {"game-engine": 0, "awebot": 0, "personal-site":0, "gitlet":0};

function highlight(project, on) {
    if(projecton[project]) return;

    let skills = document.getElementsByClassName(project);
    for (let i = 0; i < skills.length; i += 1) {
        let element = skills[i];
        let name = element.id;
        if (skillcount[name] !== 0) continue;
        if (on) {
            element.style.backgroundColor = "#7B902B";
        } else {
            element.style.backgroundColor = "#FBFBFB";
        }
    }
}

function clickproject(project) {
    if(projecton[project]) {
        hideskill(project);
    } else {
        showskill(project);
    }
    projecton[project] = !projecton[project];
}

function showskill(project) {
    let projectbox = document.getElementById(project);
    // projectbox.firstElementChild.style.color = "#FFFFFF";

    let skills = document.getElementsByClassName(project);
    for (let i=0; i < skills.length; i += 1) {
        let element = skills[i];
        let name = element.id;
        skillcount[name] += 1;
        if (!element.classList.contains(".skillitem-dark")) {
            element.classList.add("skillitem-dark");
            element.classList.remove("skillitem");
        }
    }

    let image = projectbox.children[1];
    let description = projectbox.children[2];
    image.style.animation = "fadeout 0.5s linear";
    setTimeout(function() {image.style.display = "none"; image.style.animation = "";}, 450);
    description.style.display = "block";
}

function hideskill(project) {
    let projectbox = document.getElementById(project);
    let skills = document.getElementsByClassName(project);
    for (let i=0; i < skills.length; i += 1) {
        let element = skills[i];
        let name = element.id;
        skillcount[name] -= 1;
        if (skillcount[name] === 0) {
            element.classList.remove("skillitem-dark");
            element.classList.add("skillitem");
        }
    }
    let image = projectbox.children[1];
    let description = projectbox.children[2];
    description.style.animation = "fadeout 0.5s linear";
    setTimeout(function() {description.style.display = "none"; description.style.animation = "";}, 450);
    image.style.display = "inline";
} 


gameEngine.onmouseenter = function() { highlight("game-engine", true);};
gameEngine.onmouseleave = function() { highlight("game-engine", false);};

awebot.onmouseenter = function() { highlight("awebot", true);};
awebot.onmouseleave = function() { highlight("awebot", false);};

personalSite.onmouseenter = function() { highlight("personal-site", true);};
personalSite.onmouseleave = function() { highlight("personal-site", false);};

gitlet.onmouseenter = function() { highlight("gitlet", true);};
gitlet.onmouseleave = function() { highlight("gitlet", false);};

gameEngine.onclick = function() { clickproject("game-engine")};
awebot.onclick = function() { clickproject("awebot")};
personalSite.onclick = function() { clickproject("personal-site")};
gitlet.onclick = function() { clickproject("gitlet")};
