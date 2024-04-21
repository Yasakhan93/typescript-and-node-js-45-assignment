// Task 2

let personName:string = "Areeb";
console.log(`Hello ${personName}, would you like to learn some typescript today?`);

// Task 3

let person_Name:string = "areeb";

// lower case

console.log(personName.toLowerCase());

// uppercase

console.log(personName.toUpperCase());

// title case

console.log(personName.charAt(0).toUpperCase()+ personName.slice(1,5));

// Task 4

let qoute: string = "Seek knowledge from cradle to the grave";
let author: string = "Prophet Muhammad P.B.U.H";

console.log(`${author} once said, "${qoute}"`);

// Task 5

let famous_person : string = "Prophet Muhammad";
let famousquote : string = '"No two things have been combined better than knowledge and patience."';


// compose message

let message : string = `${famous_person} once said, ${famousquote}`;

console.log(message);

// Task 6

let fname: string = "areeb\tkhan";
let fname1: string = "areeb\nkhan";

console.log(fname);
console.log(fname1);

// Task 7

// addition
let num1: number = 5;
let num2: number = 3;

console.log(num1 + num2);
// subtraction
let num3: number = 14;
let num4: number = 6;

console.log(num3 - num4);

// multiplication
let num5: number = 2;
let num6: number = 4;

console.log(num5 * num6);

// division
let num7: number = 24;
let num8: number = 3;

console.log(num7/num8);

// Task 8

// addition

console.log(5+3);

// subtraction

console.log(13-5);

// multiplication

console.log(4*2);

// division

console.log(32/4);

// Task 9

// Favorite Number

const favoritenumber: number = 28;

// print message

console.log(`my favorite number is ${favoritenumber} `);

// Task 10

// name

console.log("Yasa Khan");

// date

console.log("03-03-2024");

// Task 11

let names:string[] = ["bilal","hassaan","saad"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// Task 12

let names1:string[] = ["bilal","hassaan","saad"];

// send message

let message_:string = "would you like to learn typescript";

console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);

// Task 13

let transportation : string[] = ["Honda Motorcycle", "Toyota Corolla","Honda Civic","Audi"];

transportation.map((item)=> console.log("I would like to own a",item));

// Task 14

let guest : string[] =["babar", "shaheen", "rizwan"];

guest.map((items)=> console.log(`Hello,${items} you are invited to dinner`));

// Task 15

let guest1 : string[] =["babar", "shaheen", "rizwan"];


let canNotAttend : string = "rizwan";

console.log(`${canNotAttend} can not make it for dinner`);

let newGuest : string = "shadab";

guest1[guest1.indexOf(canNotAttend)]=newGuest;
console.log(guest1);

guest1.map((items)=> console.log(`Hello,${items} you are invited to dinner`));

// Task 16

let guest2 : string[] =["babar", "shaheen", "rizwan"];


let canNotAttend_ : string = "rizwan";

let new_Guest : string = "shadab";

guest2[guest2.indexOf(canNotAttend_)]=new_Guest;

guest2.unshift("sarfaraz");

console.log(guest2);

let fifthGuest : string = "fakhar";
let middleIndex = guest.length/2;
guest2.splice(middleIndex, 0, fifthGuest);

console.log(guest2);

guest2.push("naseem");

console.log(guest2);

guest2.map((items)=> console.log(`\nDear ${items} you are invited to dinner!`));

// Task 17

let guest3 : string[] =["babar", "shaheen", "rizwan"];

let _canNotAttend : string = "rizwan";

let _newGuest : string = "shadab";

guest3[guest3.indexOf(_canNotAttend)]=_newGuest;

guest.unshift("sarfaraz");

let fifth_Guest : string = "fakhar";
let middle_Index = guest3.length/2;
guest3.splice(middle_Index, 0, fifth_Guest);

guest3.push("naseem");
console.log(guest3);

console.log("we can only invite two people for dinner");

while(guest3.length>2){;
let removeGuest = guest3.pop();

console.log(`\nSorry ${removeGuest}, we can't invite you to dinner!`);
};

guest3.map((items)=>console.log(`\n${items}, you are still invited for dinner!`));

guest3.pop();
guest3.pop();

console.log(guest3);

// Task 18

let placesToVisit: string[] = ["Makkah", "Perth", "London", "New York", "Dubai"];

console.log(placesToVisit);
console.log(placesToVisit.sort());
console.log(placesToVisit);
console.log(placesToVisit.sort().reverse());
console.log(placesToVisit);
console.log(placesToVisit.reverse());
console.log(placesToVisit.reverse());

let sortedArray = ["Makkah", "Perth", "London", "New York", "Dubai"];

sortedArray.sort();
console.log(sortedArray);
sortedArray.reverse();
console.log(sortedArray);

// Task 19

// Array
let guestArray : string[] =["kashif", "asif", "saeed"];

console.log(guestArray.length, "people are invited to dinner");

// Task 20

let languages: string[] = ["English", "Arabic", "French", "Japanese", "Spanish"];

console.log("List Of Languages");
languages.map((item)=>console.log(item));

// Task 21

let person: {name: string , fname: string, age: number} = {name: "Areeb" , fname: "Male", age: 30};

console.log(person);

// Task 22

const days : string [] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// console.log(days{7});

console.log(days[4]);

// Task 23

let car = "subaru";

console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');

console.log("is car != 'honda civic'? predict true");
console.log(car != 'honda civic');

console.log("is car == 'subaru' ? predict false");
console.log(car == 'subaru');

console.log("is car == 'Subaru' ? predict false");
console.log(car == 'Subaru');

console.log("is car == 'SUBARU' ? predict false");
console.log(car == 'SUBARU');

console.log("is car.length == 6 ? predict true");
console.log(car.length == 6);

console.log("is car.length != 10 ? predict true");
console.log(car.length != 10);

console.log("is 12 > 32 ? predict false");
console.log(12 > 32);

console.log("is 20 <= 17 ? predict false");
console.log(20 <= 17);

console.log("is 75 >= 87 ? predict false");
console.log(75 >= 87);

// Task 24

let name_1: string = "Areeb";
let name_2: string = "Khizar";
let name_3: string = "Mousa";

if (name_1 == name_3){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}

if (name_1 != name_2){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}

if (name_2 != name_3){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}

let age_1: number = 18
let age_2: number = 22

if (age_1 == 18){
    console.log("eligible to vote")
}

if (age_1 != 22){
    console.log("eligible to vote in older category");
}

if (age_1 < age_2){
    console.log("younger brother");
} else {
    console.log("older brother");
}

if (age_1 > age_2){
    console.log("younger brother");
} else {
    console.log("older brother");
}

if (age_1 <= age_2){
    console.log("younger");
}

if (age_2 >= age_1){
    console.log("older");
}

if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for NIC");
}

if (age_1 != 18 || age_2 == 22){
    console.log("person is not eligible for NIC");
}

let numbers : number [] = [1, 2, 3, 4];
console.log("is 3 in numbers? i predict true.");
console.log(3 in numbers);

console.log("is 5 not in numbers? i predict true");
console.log(5 in numbers);

// Task 25

let alienColor : string = "green";

if (alienColor == "green"){
    console.log("player just earned 5 points");
}

alienColor = "red";

if (alienColor == "green"){
    console.log("player just earned 5 points");
}

// Task 26

let _aliencolor : string = "green";

if (_aliencolor == "green"){
    console.log("player just earned 5 points for shooting the alien");
} else {
    console.log("player just earned 10 points");
}

if (_aliencolor == "yellow"){
    console.log("player just earned 5 points for shooting the alien");
} else {
    console.log("player just earned 10 points");
}

// Task 27

let alien_color : string = "green";

if (alien_color == "green"){
    console.log("player earned 5 points");
} else if (alien_color == "yellow"){
    console.log("player earned 10 points");
} else if (alien_color == "red"){
    console.log("player earned 15 points");
} else {
    console.log("please select the right colour")
}

alien_color = "yellow"

if (alien_color == "green"){
    console.log("player earned 5 points");
} else if (alien_color == "yellow"){
    console.log("player earned 10 points");
} else if (alien_color == "red"){
    console.log("player earned 15 points");
} else {
    console.log("please select the right colour")
}

alien_color = "red"

if (alien_color == "green"){
    console.log("player earned 5 points");
} else if (alien_color == "yellow"){
    console.log("player earned 10 points");
} else if (alien_color == "red"){
    console.log("player earned 15 points");
} else {
    console.log("please select the right colour")
}

// Task 28

let age : number = 30;

if (age < 2) {
    console.log("The person is a baby");
} else if (age >=2 && age <4) {
    console.log("The person is a toddler");
} else if (age >= 4 && age <13) {
    console.log("The person is a kid");
} else if (age >=13 && age <20) {
    console.log("The person is a teenager");
} else if (age >=20 && age <65) {
    console.log("The person is an adult");
} else {
    console.log("The person is an elder");
}

// Task 29

let favorite_fruits: string [] = ['Mangoes','Oranges', 'Apples',];

if (favorite_fruits.includes('mangoes')){
    console.log('I really like mangoes!');
}

if (favorite_fruits.includes('grapes')){
    console.log('I really like grapes!');
}

if (favorite_fruits.includes('oranges')){
    console.log('I really like oranges!');
}

if (favorite_fruits.includes('bananas')){
    console.log('I really like bananas!');
}

if (favorite_fruits.includes('apples')){
    console.log('I really like apples!');
}

// Task 30

let users : string [] = ["admin", "areeb", "bilal", "saad", "hassaan"];

for(let user of users){
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report?");
    } else {
        console.log(`hello ${user}, thank you for logging in again`);
    }
}

// Task 31

let _users : string [] = ["admin", "areeb", "bilal", "saad", "hassaan"];

if (_users.length === 0) {
    console.log("We need to find some users!")
} else {
    _users = [];
    console.log("All user have been removed " + _users.length);
}

// Task 32

let current_users : string [] = ["Admin", "Faizan", "Tahir", "Fabeha", "uzma"];
let new_users : string [] = ["Admin", "Bilal", "Fabeha", "Areeb", "Atieq"];

new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

// Task 33

let numbers_: number [] = [1,2,3,4,5,6,7,8,9];

for (let number of numbers_) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

// Task 34

let favourite_pizza : string [] = ["Malai boti" , "Pepperoni" , "Chicken tikka"];

for (let pizza of favourite_pizza) {
    console.log(pizza);
}

for (let pizza of favourite_pizza) {
    console.log(`I really like ${pizza} pizza!`);
}

console.log("\n I really love pizza!");

// Task 35

let animals : string [] = ["Cat" , "Dog" , "Tiger"];

for (let animal of animals) {
    console.log(animal);
}

for (let animal of animals) {
    console.log(` A ${animal} has a tail`);
}

console.log("\n All of these all carnivorous animals")

// Task 36

function makeShirt (size: string , text: string) {
    console.log(`you order a ${size} shirt that says ${text}`);
}

makeShirt(`large` , `"I love Pakistan!"`);

// Task 37

function make_shirt (size = "large" , message = "I love TypeScript") {
    console.log(`You have order a ${size} shirt that says ${message}`)
}

make_shirt();
make_shirt("medium");

make_shirt("medium" , "Greatest of all time");

// Task 38

function describe_city (city: string , country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}

let city1 = describe_city("Karachi");
let city2 = describe_city(`Islamabad`);
let city3 = describe_city("Dubai" , "UAE");

// Task 39

function city_country(city: string , country: string) {
    return `${city}, ${country}`
}

let pair1 = city_country("Karachi" , "Pakistan");
let pair2 = city_country("Mumbai" , "India");
let pair3 = city_country("New York" , "USA");

console.log(pair1);
console.log(pair2);
console.log(pair3);

// Task 40

function make_album(artistName : string , albumTitle: string) {
    return {artistName, albumTitle}
}

let album1 = make_album("Ali" , "Jazba");
let album2 = make_album("Atif" , "Junoon");
let album3 = make_album("Danish", "Ae Dil");

console.log(album1);
console.log(album2);
console.log(album3);

// number of tracks

function make_album2(artistName : string , albumTitle: string, numberOfTracks: number) {
    return {artistName , albumTitle , numberOfTracks}
}

let album4 = make_album2("Ali" , "Zindagi" , 25);
let album5 = make_album2("Atif" , "Aadat" , 40);
let album6 = make_album2("Danish", "Judai" , 15);

console.log(album4);
console.log(album5);
console.log(album6);

// Task 41 magicians

function show_magicians (magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician : string [] = ["chris" , "john" , "salman"];
show_magicians(magician);

// Task 42 make great

function make_great (magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great"
    }
}

const magicians2: string[] = ["chris" , "john" , "salman"];
make_great(magicians2);
show_magicians(magicians2);

// Task 43 unchanged magicians

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}

const magicians3: string[] = ["chris" , "john" , "salman"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);

// Task 44

function sandwiches(...items: string[]) {
    console.log("Sandwich order:");

    for(let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy yor sandwich");

sandwiches(`chicken` , `tomatoes` , `onion`);
sandwiches(`beef` , `cheese` , `eggs`);
sandwiches(`shami kebab` , `ketchup` , `capsicum`);

// Task 45

type car = {
    manufacturer: string
    model: string
    [key: string]: any;
}

function createCar(manufacturer: string, model: string,optional: Record<string , any>) {
    return{
        manufacturer,
        model,
        ...optional
    }
}

const myCar: car = createCar("honda", "civic", {colour: "black", year: "2023"});

console.log(myCar);

// all 45 assignments done