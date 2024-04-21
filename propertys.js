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



