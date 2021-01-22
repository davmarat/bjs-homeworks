function getResult(a,b,c){
    "use strict";
    // код для задачи №1 писать здесь
    // return x;
    let result ='';
    let discrim = b**2 - 4 * a * c; 
    if (discrim < 0) { 
      result = [];
      console.log(result);
   } else if (discrim === 0) {
       result = [(-b + Math.sqrt(discrim)) / (2*a)];
       console.log(result);
   } else if (discrim > 0) {
       result = [(-b + Math.sqrt(discrim)) / (2*a), (-b - Math.sqrt(discrim)) / (2*a)];
       console.log(result);
   }
  
     return result;
}


function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
    let sumResult = 0;
    let averageMark = '';
    const numberMarks = 5;
    for (let i = 0; i < marks.length; i++) {
      sumResult = sumResult + marks[i];
      if (marks.length > numberMarks) {
          console.log(marks.length);   
          marks.splice(numberMarks);
      } else if (averageMark = 0) {
          console.log("0")
      }
    }

    averageMark = sumResult / marks.length;
    console.log(averageMark);
    
    return averageMark;
}


}