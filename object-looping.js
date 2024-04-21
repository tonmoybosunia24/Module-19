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