"use strict"
function getResult(a,b,c) {
    // код для задачи №1 писать здесь
    // return x;
    let result =[];
    let discrim = b**2 - 4 * a * c; 
    if (discrim === 0) {
       result = [(-b + Math.sqrt(discrim)) / (2*a)];
   } else if (discrim > 0) {
       result = [(-b + Math.sqrt(discrim)) / (2*a), (-b - Math.sqrt(discrim)) / (2*a)];
   }
     return result;
};


function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
    let sumResult = 0;
    const numberMarks = 5;
    for (let i = 0; i < marks.length; i++) {
       sumResult = sumResult + marks[i];
       console.log(marks.length);   
       marks.splice(numberMarks);
    };
    if (sumResult === 0){
         return sumResult;
    };
    return sumResult / marks.length;
};


