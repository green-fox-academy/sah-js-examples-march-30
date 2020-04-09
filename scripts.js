// 4th part

$('p').css('background', 'purple');

$('p').text('<strong>hello world</strong>');

$('p').html('<strong>hello world</strong>');
$('p').append('<strong>another</strong>');

// $('div').remove();

$('button').click(() => {
  $('.first').toggleClass('hidden');
})

// From 1st part to the 3rd
console.log("Break until 18:11");

console.log("JavaScript is working!");

let colors = ["orange", "blue", "green", "purple"];

let post = {
  title: "My Post",
  description: "My First post, awesome",
  likeCount: 12,
  comments: ["cool!", "nice job!"]
};

let posts = [{
  title: "First post",
  likeCount: 12
}, {
  title: "Second post",
  likeCount: 222
}];

console.log(colors);
console.log(post);

let age = 18;

if (age >= 18) {
  console.log("you're an adult!");
} else {
  console.log("you're a kid!");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(colors);

// f(x) = x * x

let myFunction = x => {
  console.log(x);
}

let greeter = name => {
  console.log(`Hello, ${name}`);
  if (name === "Adam") {
    console.log("he's an adult");
  }
  if (name === "Mate") {
    console.log("he's an adult");
  }
}

greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");

// ["orange", "blue", "green", "yellow"]

colors.forEach(unicorn => {
  console.log(unicorn);
});

console.log("this is the end of our code");

// CTRL + /
// 15
// 15
// 15 + 5
// 20
// 15 + 5;
// 20
// 2 - 5;
// -3
// 2 * 5;
// 10
// 15 / 3;
// 5
// let age;
// undefined
// age
// undefined
// age = 33;
// 33
// age
// 33
// age / 3;
// 11
// let ageOfAdam = 33;
// undefined
// ageOfAdam;
// 33
// age
// 33
// ageOfAdam
// 33
// age = 40;
// 40
// let age = 50;
// undefined
// age = 50;
// 50
// age = ageOfAdam + 14;
// 47
// age
// 47
// 'hello world'
// "hello world"
// "hello world"
// "hello world"
// "adam's age"
// "adam's age"
// 'adam's age'
// VM1793:1 Uncaught SyntaxError: Unexpected identifier
// `adam's age is "33"`
// "adam's age is "33""
// `adam's age is ${ageOfAdam}`
// "adam's age is 33"
// "how long is this".length
// 16
// let text = "this is my text";
// undefined
// text.length
// 15
// age
// 47
// text
// "this is my text"
// text = 5
// 5
// text.len
// undefined
// text.length
// undefined
// text = "this is my text";
// "this is my text"
// let another = "Hello, StayAtHome Coding Camp!"
// undefined
// another = "modifying the value"
// "modifying the value"
// let myFirstBoolean = true;
// undefined
// myFirstBoolean = false;
// false
// another.endsWith("value")
// true
// another.endsWith("not that")
// false
// false || false;
// false
// age
// 47
// let post = "This my post I'm very happy..."
// undefined
// let post2 = "This my second post I'm very happy..."
// undefined
// let colors = ["orange", "blue", "green", "purple"];
// undefined
// let different = []
// undefined
// different = [1, "text", true]
// (3) [1, "text", true]
// colors
// (4) ["orange", "blue", "green", "purple"]0: "orange"1: "blue"2: "green"3: "purple"length: 4__proto__: Array(0)
// colors.length
// 4
// colors.push("yellow");
// 5
// colors
// (5) ["orange", "blue", "green", "purple", "yellow"]
// colors.pop("orange")
// "yellow"
// colors.pop()
// "purple"
// colors
// (3) ["orange", "blue", "green"]0: "orange"1: "blue"2: "green"length: 3__proto__: Array(0)
// colors[2] = "purple"
// "purple"
// colors
// (3) ["orange", "blue", "purple"]
// colors[0] = colors[1]
// "blue"
// colors
// (3) ["blue", "blue", "purple"]
// colors[0] = colors[1] + "ish"
// "blueish"
// colors
// (3) ["blueish", "blue", "purple"]
// let nexPartAt = "16:05"
// undefined
// false || (true && (false || false))
// false
// let title = "My post"
// undefined
// let description = "My first post, awesome"
// undefined
// let likeCount = 12;
// undefined
// let comments = ["cool!", "nice job!"];
// undefined
// let post = {
//   title: "My Post",
//   description: "My First post, awesome",
//   likeCount: 12,
//   comments: ["cool!", "nice job!"]
// };
// undefined
// post
// {title: "My Post", description: "My First post, awesome", likeCount: 12, comments: Array(2)}
// let posts = [post]
// undefined
// post.title
// "My Post"
// post.likeCount = 15;
// 15
// post
// {title: "My Post", description: "My First post, awesome", likeCount: 15, comments: Array(2)}
// post.comments
// (2) ["cool!", "nice job!"]
// post.comments.push("another comment!")
// 3
// let comment = "FIRST COMMENT!"
// undefined
// post.comments.push(comment)
// 4
// post.likeCount = post.likeCount + 1;
// 16
// post.likeCount = post.likeCount - 1;
// 15
// age
// 47
// age++
// 47
// age
// 48
// ++age
// 49
// age++
// 49
// age
// 50
// let newSomething = 5;
// undefined
// newSomething === 5;
// true
// newSomething !== 10;
// true
// newSomething !== 5;
// false
// "hello" === "hello"
// true
// "hello" === "hello2"
// false
// post
// {title: "My Post", description: "My First post, awesome", likeCount: 15, comments: Array(4)}
// post === post
// true
// post === {}
// false
// 5 >= 10
// false
