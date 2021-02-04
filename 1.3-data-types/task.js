"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    if (percent >= 0) {  
      +percent;
    } else if (percent !== Number) {
        return (`“Параметр "Процентная ставка" содержит неправильное значение ${percent}”.`);
    };

    if (contribution >= 0) {  
      +contribution;
    } else if (contribution !==  Number) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}.`; 
    };

    if (amount >= 0) {  
      +amount;
    } else if (amount !== Number) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}.`; 
    };
  
   let returnAmount = amount - contribution;
   let currentDate  = new Date();  
   let payPeriod = date.getFullYear() - currentDate.getFullYear();
   let mountCount = payPeriod * 12;  
   percent = percent /  100 / 12; 
   let monthlyPay = returnAmount * (percent + percent / (((1 + percent) ** mountCount)  - 1)); 
   let totalAmount = monthlyPay  * mountCount;  
   return totalAmount.toFixed(2); 
}
 
   
    

   


function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    let greetings;
    if (name === "") {
      greetings = `Привет, мир! Меня зовут Аноним.`
    }
    else if (name === undefined) {
      greetings = `Привет, мир! Меня зовут Аноним.`
    } else ( greetings = `Привет, мир! Меня зовут ${name}.`);
    return greetings;
    console.log(greetings);
    };
     