"use strict"

///1
function parseCount(a) {
    const result = Number.parseInt(a);
    if (isNaN(result)) {
       throw new Error("Невалидное значение");
    }
    return result;
 }
 
 function validateCount(b) {
    try {
      return parseCount(b);
    } catch(error) {
       return error;
    }
}

///2

class Triangle {
   constructor(a, b, c) {
   this.a = a;
   this.b = b;
   this.c = c;
   
   if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
   }
}

   getPerimeter() {
      return this.a + this.b + this.c;
   }
   
   getArea() {
      const halfPerimeter = this.getPerimeter() / 2;
      const area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
      return + area.toFixed(3);
   }
} 

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch (e) {
      return {
         getArea(){
            return "Ошибка! Треугольник не существует"
         },
         getPerimeter(){
            return "Ошибка! Треугольник не существует"
         }
      }
   }
}
   