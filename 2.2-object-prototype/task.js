//String.prototype.isPalindrome - для задачи №1
"use strict"

String.prototype.isPalindrome = function() {
    const normalString = this.toLowerCase().replaceAll(" ", "");
    const reversString = normalString.split('').reverse().join('').replaceAll(" ", "");
    console.log(reversString);
    console.log(normalString);
    return reversString === normalString;
}



function getAverageMark(marks) {
    let sum = 0;
    let marksAverage;
    let roundedAverage;
        
    if (marks.length === 0) {
           return 0;
        }
        
    for (let i = 0; i < marks.length; i++) {
               sum += marks[i];
           }
    marksAverage = sum / marks.length;
    roundedAverage = Math.round(marksAverage);
    return roundedAverage;
    }


