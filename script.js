// Function.js


// Function Declaration
function startFan(){ /* ফাংশন লেখার নিয়ম।ফাংশন কে একবার লিখেই কয়েকবার ব্যাবহার করা যায়। */
       console.log("Stand Up")
       console.log("walk towards the switch")
       console.log("press the swithch")
}
// Call The Function
startFan();
startFan();


// Peramiter.js


// function bringsingra(money){
//        console.log("Mama Singra den")
//        console.log(money)
// }
// bringsingra(200);
// function friendsName(name){ /* (name) এটা হছে একটা প্যারামিটার।প্যারামিটার অনুসারেই ফাংশন কাজ করে। */
//        console.log(name)
//        console.log("Dst Tor Dawat Thaklo")
// }
// friendsName("rohim");
// friendsName("korim");
// function add(num1, num2){ /* অনেকগুলো প্যারামিটার ও অ্যাাড করা যেতে পারে। */
//        console.log("Going To Add", num1, num2)
// }
// add(125, 115);
// function sum(a, b, c, d, e){
//        console.log(a, b, c, d, e)
//        var sum = a + b + c + d + e;
//        console.log(sum)
// }
// sum(1, 2, 3, 4, 5);
function numbers(num1, num2, num3, num4, num5, num6){
       console.log(num1, num2, num3, num4, num5, num6)
       var added = num1 + num2 + num3 + num4 + num5 + num6;
       console.log(added)
}
numbers(2, 3, 5, 5, 56, 6);


// Return.js


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


// Function-Example.js


// function functionName(Peramiters){ /* ফাংশন লেখার নিয়ম। */
//        function Body
//        return
// }
// var returnvalue = functionName(Peramiters value)
function getTotal(assingment1, assingment2, assingment3){
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


// Object.js


var student = { id: 115, name: "Tonmoy Bosunia", class: 9, marks: 98} /* এটা হচ্ছে একটা অবজেক্ট। */
var mobile = { brand: "Samsung", price: 1900, storage: "64Gb", camra: "7MP"}
var computer = { brand: "Walton", price: 50000, color: "Black", processor: "10ThGen" }
computer.processor = "11ThGen"; /* কোন অবজেক্ট এর প্রোপারটি এর মান পরিবরতন এর জন্য। */
console.log(computer) /* পুরো অবজেক্ট টাই পাওয়ার জন্য। */
console.log(computer.price) /* কোন অবজেক্ট এর নিদিষ্ট কোন প্রোপারটি এর ভেল্যু পাওয়ার জন্য। */


// Property.js


var shoppingCard = { books: 10, sunglass: 5, pen: 4, keyboard: 1, khata: 6, mouse: 2}

var penCount = shoppingCard.pen; /* কোন অবজেক্ট এর প্রোপারটি এর মানকে বের করার জন্য। এটা তখনি ব্যাবহার করবো যখন যানবো যে অবজেক্ট এর মধ্যে এই প্রোপারাটি টি আছে। */
// console.log(penCount)
var penCount2 = shoppingCard["pen"]; /* কোন অবজেক্ট এর প্রোপারটি এর মানকে বের করার জন্য। */
// console.log(penCount2)
/* কোন অবজেক্ট এর প্রোপারটি এর মানকে ডাইনিমিকালি বের করার জন্য। */
/* var propertyName = "mouse";  
var propertyValue = shoppingCard[propertyName];
console.log(propertyName, propertyValue) */
var properties = Object.keys(shoppingCard) /* যখন অবজেক্ট এর মধ্যে প্রোপারটি এর নাম জানি না তখন। এখানে শুধু প্রোপারটি এর নাম টা পাওয়া যাবে। */
var propertyValues = Object.values(shoppingCard); /* এখানে অবজেক্ট এর ভেলু গুলাকে পাওয়া যাবে। */
// console.log(propertyValues)
// console.log(properties);
// console.log(penCount)
// console.log(shoppingCard);

// Set Property Values

shoppingCard.mouse = 15; /* কোন অবজেক্ট এর প্রোপারটি এর মান সেট করার জন্য। */
shoppingCard["mouse"] = 16; /* কোন অবজেক্ট এর প্রোপারটি এর মান সেট করার জন্য। */
var propertyName = "mouse";
shoppingCard[propertyName] = 18; /* কোন অবজেক্ট এর প্রোপারটি এর মান সেট করার জন্য। */
console.log(shoppingCard)


// Object-Looping.js


/* Array Vs Object */
var shoppingCard = { books: 10, sunglass: 5, pen: 4, keyboard: 1, khata: 6, mouse: 2}
var shoppingItems = ["books", "sunglass", "shows"]
const keys = Object.keys(shoppingCard)
console.log(keys);
const values = Object.values(shoppingCard)
console.log(values)
for(var i = 0; i < keys.length; i++){ /* অবজেক্ট এর লুপ ব্যাবহার করা। */
       var propertyName = keys[i];
       var propertyvalue = shoppingCard[propertyName];
       console.log(propertyName, propertyvalue)
}
// For In Loop
for(var propertyName in shoppingCard){
       var propertyvalue = shoppingCard[propertyName];
       console.log(propertyName, propertyvalue)
}


// Switch.js


var color = "yellow";
if(color == "green"){
       console.log("You Are A Green Friend")
}
else if(color == "blue"){
       console.log("You Are My Blue Friend")
}
else if(color == "red"){
       console.log("You Are My red Friend")
}
else if(color == "white"){
       console.log("You Are My white Friend")
}
else if(color == "yellow"){
       console.log("You Are My yellow Friend")
}
else{
       console.log("You Are My Black Firend")
}
/* Switch */

switch(color){
       case "green":
              console.log("You Are My Green Friend")
              break;
       case "blue":
              console.log("You Are My blue Friend")
              break;
       case "white":
              console.log("You Are My white Friend")
              break;
       case "red":
              console.log("You Are My red Friend")
              break;
       case "red":
              console.log("You Are My red Friend")
              break;
       case "yellow":
              console.log("You Are My yellow Friend")
              break;
       default:
              console.log("You Are My Black Friend")
              break;
}