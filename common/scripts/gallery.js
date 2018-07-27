//  SORT PROJECTS BY YEAR (MOST RECENT FIRST)
var projects = document.getElementsByClassName("project-thumbnail"); 
var i ; // index is inside here
var arrayOfYProjects = [];
var arrayOfYears = [];

//Make new array of available project years
for (i = 0; i < projects.length; i++) {
    //Project Completion date
    var time = parseInt(projects[i].getAttribute("data-time")); 
    
    arrayOfYProjects.push(projects[i]);
    arrayOfYears.push(time);
}

//Delete dublicated
var uniqueArray = arrayOfYears.filter(function(elem, pos) {
  return arrayOfYears.indexOf(elem) == pos;
});

//Sort in descending order   
uniqueArray.sort(function(a, b){return b-a});
//console.log("sorted unique array "+uniqueArray);

//Find the corresponding order of each project and assign order number
for (i = 0; i < projects.length; i++) { 
    var posInArray = uniqueArray.indexOf(parseInt(projects[i].getAttribute("data-time")));
    var gridOrder = posInArray + 1;
    var projectId = projects[i].getAttribute("id")
    
    projects[i].style.order = String(gridOrder);
}

//  END OF SORTING




//  SHOW ONLY SELECTED PROJECT (BY CATEGORY)
var arch = document.getElementsByClassName("arch");
var vis = document.getElementsByClassName("vis");
var code = document.getElementsByClassName("code");

function checkHash(){   
    if (location.hash == "#all"){
        for (archIndex = 0; archIndex < arch.length; archIndex ++) {
            arch[archIndex].style.display = "flex";
        }
        for (visIndex = 0; visIndex < vis.length; visIndex ++) {
            vis[visIndex].style.display = "flex";
        }
        for (codeIndex = 0; codeIndex < code.length; codeIndex ++) {
            code[codeIndex].style.display = "flex";
        }
    }
    
    else if (location.hash == "#architecture"){
        for (visIndex = 0; visIndex < vis.length; visIndex ++) {
            vis[visIndex].style.display = "none";
        }
        for (codeIndex = 0; codeIndex < code.length; codeIndex ++) {
            code[codeIndex].style.display = "none";   
        }
        for (archIndex = 0; archIndex < arch.length; archIndex ++) {
            arch[archIndex].style.display = "flex";
        }
    }
    
    else if (location.hash == "#visuals"){
        for (archIndex = 0; archIndex < arch.length; archIndex ++) {
            arch[archIndex].style.display = "none";
        }
        for (codeIndex = 0; codeIndex < code.length; codeIndex ++) {
            code[codeIndex].style.display = "none";   
        }
        for (visIndex = 0; visIndex < vis.length; visIndex ++) {
            vis[visIndex].style.display = "flex";
        }
    }
    
    else if (location.hash == "#digital"){
        for (archIndex = 0; archIndex < arch.length; archIndex ++) {
            arch[archIndex].style.display = "none";
        }
        for (visIndex = 0; visIndex < vis.length; visIndex ++) {
            vis[visIndex].style.display = "none";
        }
        for (codeIndex = 0; codeIndex < code.length; codeIndex ++) {
            code[codeIndex].style.display = "flex";   
        }
    }
}

window.addEventListener("onload", checkHash);
window.addEventListener("hashchange", checkHash);

//  END OF SHOW SELECTION





////CHANGE BUTTON BACKGROUND COLOUR ON CLICK // TO BE REVIEWED
//var catButtons = document.getElementsByClassName("tab");
//var catButtonsIndex ; // index is inside here
//console.log("catButtons are");
//console.log(catButtons);
//
//for (catButtonsIndex = 0; catButtonsIndex < catButtons.length; catButtonsIndex ++) {
//    catButtons[catButtonsIndex].addEventListener("click", function (){   
////        catButtons[catButtonsIndex].style.backgroundColor = "aqua";
//        console.log(this.childNodes[0]);
//        console.log(this.selectAllChildren);
////        console.log(this);
//    })
//}












//  WRITE PROJECT INFO BASED ON HTML PROJECT INFORMATION 
//
//var projects = document.getElementsByClassName("project-thumbnail"); 
//var i ; // index is inside here
//
//console.log(projects.length);
//
//for (i = 0; i < projects.length; i++) {
//    //Project info
//    var arch = projects[i].getAttribute("data-architect");
//    var time = parseInt(projects[i].getAttribute("data-time"));
//    var cat= projects[i].getAttribute("data-category");
//    var status = projects[i].getAttribute("data-status");
//    var loc = projects[i].getAttribute("data-location");
//    
//    //Target
//    var target = projects[i].querySelector("p.info") ;
//    target.innerHTML = "";
//    
//    if (status.toLowerCase() === "competition" && parseInt(arch) !== 0) {
//        target.innerHTML = arch+" / "+time+" / "+cat+" / "+status;
//        console.log(projects[i].querySelector("h3.name").innerHTML+" = "+target.innerHTML);
//    }
//    
//    else if(parseInt(arch) !== 0 && arch !== "DSA"){
//        target.innerHTML = arch+" / "+time+" / "+cat;
//        console.log(projects[i].querySelector("h3.name").innerHTML+" = "+target.innerHTML);
//    }
//    
//    else {
//        target.innerHTML = time+" / "+cat;
//        console.log(projects[i].querySelector("h3.name").innerHTML+" = "+target.innerHTML);
//    }
//}