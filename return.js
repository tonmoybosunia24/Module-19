// function add(num1, num2){
//        console.log(num1, num2)
//        var sum = num1 + num2;
//        // console.log(sum)
//        return sum; /* ফাংশন এর আউটপুট কে অন্য কোথাও পাঠানোর জন্য। */
// }
// // add(3, 6);
// var total = add(80, 20);
// console.log("total:", total)
function bringSingra(money){
       var singraprice = 10;
       var quantity = money / singraprice;
       return quantity;
}
var singraPabo = bringSingra(150);
console.log(singraPabo)