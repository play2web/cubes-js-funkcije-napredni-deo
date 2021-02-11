/// TASK 1:
/// Create a constructor function for generating student objects. 
// Each student object should have name, last name, age and average grade.

function Student (name, lastName, age, averageGrade){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.averageGrade = averageGrade;
}

var michael = new Student('Michael', 'Trumph', 22, 9);
console.log(michael);

// TASK 2:
// Create a constructor function for generating objects with data about players of your favorite football team
// (name, age, goals scored, yellow cards). You can find statistics online.

function Player (name, age, goals, yellowCards){
    this.name = name;
    this.age = age;
    this.goals = goals;
    this.yellowCards = yellowCards;
}

var messi = new Player('Messi', 28, 22, 9);
console.log(messi);

// TASK 3:
// Try to do the same thing as in the previous task,
//  but when creating player objects try to do it dinammicaly (using loop). 
//  For that you'll need data in following format:
// var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];

var players = [["Ronaldo", 34, 12, 4], ["Messi", 30, 12, 4], ["Katai", 28, 12, 4]];
var newPlayers = [];

for (var i = 0; i < players.length; i++) {
    newPlayers[newPlayers.length] = new Player(players[i][0], players[i][1], players[i][2], players[i][2]);
}

console.log(newPlayers);

// TASK 4:
// Create a construction function that should contain properties for first number, second number, and method. 
// Then create a four instances of object from that constructor, 
// each with different numbers, and different method. First should have method for multiplying of its own numbers,
// second for dividing, third for adding and fourth for subtracting.

function ProccesData (firstNumber, secondNumber, methodToPerforme){
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.methodToPerforme = methodToPerforme;
}

var multiplying = function (){
    console.log(this.firstNumber * this.secondNumber);
}

var dividing = function (){
    console.log(this.firstNumber / this.secondNumber);
}

var adding = function (){
    console.log(this.firstNumber + this.secondNumber);
}

var subtracting = function (){
    console.log(this.firstNumber - this.secondNumber);
}

var multiplyingNumbers = new ProccesData(2, 2, multiplying);
multiplyingNumbers.methodToPerforme();

var dividingNumbers = new ProccesData(2, 2, dividing);
dividingNumbers.methodToPerforme();

var addingNumbers = new ProccesData(2, 2, adding);
addingNumbers.methodToPerforme();

var subtractingNumbers = new ProccesData(2, 2, subtracting);
subtractingNumbers.methodToPerforme();