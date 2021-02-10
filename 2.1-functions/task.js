"use strict"
function getSolutions( a, b, c ) {
    let D = b ** 2 - 4 * a * c;
    let x1;
    let x2;
    if (D < 0) {
        return {
            D: D,
            roots: []
        }; 
    } else if (D === 0) {
        x1 = -b / 2 * a;
        return {
            D: D,
            roots: [x1]
        };
    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D: D,
            roots: [x1, x2]
        };
    };
    }

    function showSolutionsMessage( a, b, c ){
        let result = getSolutions( a, b, c );
        console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
        console.log(`Значение дискриминанта: ${result.D}`);
        if (result.D < 0) {
            console.log(`Уравнение не имеет вещественных корней`);
        } else if (result.D == 0) {
            console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
       } else {
           console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
     };
    }
    showSolutionsMessage(2, 4, 2);


    //2
    function getAverageScore(data) {
        let result = {};
        let averageMarks = [];
     
        for (const key in data) {
           result[key] = getAverageMark(data[key]);
           averageMarks.push(result[key]);
        }
     
        result.average = getAverageMark(averageMarks);
        return result;
     }
     
     function getAverageMark(marks) {   
        let sum = 0;
        
        if (marks.length === 0) {
           return 0;
        }
        
        for (let i = 0; i < marks.length; i++) {
               sum += marks[i];
           }
           return sum / marks.length;
     }
     
     console.log(getAverageScore({
        algebra: [2, 4, 5, 2, 3, 4],
        geometry: [2, 4, 5],
        russian: [3, 3, 4, 5],
        physics: [5, 5],
        music: [2, 2, 6],
        english: [4, 4, 3],
        poetry: [5, 3, 4],
        chemistry: [2],
        french: [4, 4]
     }));
     

     //3 
     function getPersonData(secretData) {
        return {
           firstName: getDecodedValue(secretData.aaa),
           lastName: getDecodedValue(secretData.bbb)  
           }
     }
     
     function getDecodedValue(secret) {
        let name;
        if (secret === 0) {
            return "Родриго"
        } else if (secret === 1) {
            return "Эмильо"
        }
        return name;
     }
     
     console.log(getPersonData({
        aaa: 1,
        bbb: 0
     }));
    


        
    
            