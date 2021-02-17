'use strict';

// Variable to store the number of total customers, number of missed loyaty, and number of new members 
var total = 0;
var missedMemberCounter = 0;
var newMem = 0;

//creates short hand to call DOM elements from the home html page
var missedMemberClick = document.getElementById("missed");
var newMemberClick = document.getElementById("newMember");
var totalClicks =  document.getElementById("totalTracker");
var displayNewMember = document.getElementById("newMemTracker");

// initilizes varianle that will store the percentage of new members compared to total customers
var assPercentage = 0;

//runs function when the "New/Retrun Loyalty Member" button is clicked. 
newMemberClick.onclick = function () {
    newMem +=1;
    total += 1;
    displayNewMember.innerHTML = "New Members: " + newMem;
    totalClicks.innerHTML = "Total: " + total;
}

//actives function that incremets the number of missed and total number and displays each values respectivly, when the "Missed Member" button is clicked
missedMemberClick.onclick = function () {
    total += 1;
    missedMemberCounter += 1;
    totalClicks.innerHTML = "Total: " + total;
    document.getElementById("missedTracker").innerHTML = "Missed: " + missedMemberCounter;
}

// activates a function to calculate the percentage when the "Calculate Percent" button is clicked
document.getElementById("calcPercent").onclick = function () {
    assPercentage = newMem / total;
    document.getElementById("percentTracker").innerHTML = "Loyalty Percentage: " + Math.round(assPercentage * 100) + "%";

    // displays percentage as 0 if the percentage is calculated before total has been incremented
    if ((newMem === 0) && (total === 0)) {
        document.getElementById("percentTracker").innerHTML = "Loyalty Percentage: 0%";
    }
}