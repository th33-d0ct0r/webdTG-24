// console.log("asdasdas") // to print anything inside the console
// data types - string ("asdasd")
// int - 1,4,61,4
// float - 3.1415
// array = []
// dict/object = {}

// console.log(Math.pow(15,10))

// var/const/let 

// let a = {
//     "a": 1,
//     "b": 2,
//     "c": 3
// }
// console.log(a["c"])
// a = 2
// console.log(a)

// var bool = false
// console.log(bool)

// if-else statements

// var user_exists_or_not = false
// if (user_exists_or_not) {
//     console.log("user does not exist")
// }
// else {
//     console.log("use exists")
// }

// var a = 1
// // console.log(1 == '1')
// if (a == "1") {
//     console.log("1 = '1'")
// }
// else {
//     console.log("these values are not equal")
// }

var user_exists = true
var password = "1234"

// if (!user_exists) {
//     console.log("User does not exist")
// } else if (password != "1234") {
//     console.log("password is not correct")
// } else {
//     console.log("successfully logged in")
// }

// Nested-if statements

// if (user_exists) {
//     if (password === "1234") {
//         console.log("Succesfully logged in")
//     } else {
//         console.log("password incorrect")
//     }
// } else {
//     console.log("user does not exist")
// }

// console.log(Math.random())
var random_val = Math.random()
var computer_choice;

if (random_val < 0.31) {
    computer_choice = "rock"
} else if (random_val < 0.61 ) {
    computer_choice = "scissors"
} else {
    computer_choice = "paper"
}

// console.log(computer_choice)


var user_choice = prompt("What would you like to choose (rock/paper/scissor): ")
// console.log(user_choice)

