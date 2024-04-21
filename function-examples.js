// function functionName(Peramiters){ /* ফাংশন লেখার নিয়ম। */
//        function Body
//        return
// }
// var returnvalue = functionName(Peramiters value)
function getTotal(assingment1, assingment2, assingment3){
       var marks = assingment1,  assingment2, assingment3;
       console.log("Assingment 01:", assingment1, "Assingment 02:", assingment2, "Assingment 03:",assingment3)
       var totalMarks = assingment1 + assingment2 + assingment3;
       var avarage = totalMarks / 3;
       return avarage
}
var avaragePabo = getTotal(80, 30, 95);
console.log("Avarage Mark:", avaragePabo)
// function add(num1, num2){
//        var sum = num1 + num2;
//        return sum;
// }
// var result1 = add(12, 13);
// var result2 =  add(10, 70);
// var finalResult = add(result1, result2);
// console.log(finalResult)