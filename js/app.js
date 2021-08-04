'use strict';

let counter = 0;


let name = prompt('Tell me whats your name please');

console.log(name);

alert("Welcome! in our website" + "  " + name);

// Function Number 1
function Q1() {

    let Q1 = prompt('Is the Mercedes is my favorite car (yes/no)?');
    Q1 = Q1.toLowerCase();

    if (Q1 == 'yes') {

        //console.log('you are right.')
        alert('you are right.');

        counter += 1;
    } else if (Q1 == 'no') {

        //console.log('you are wrong.')
        alert('you are wrong.')
    } else {
        alert("please enter yes or no")
    }
    return Q1;
}
Q1();
//Function Number 2
function Q2() {
    let Q2 = prompt('Is red my favorite color (yes/no)?');
    Q2 = Q2.toLowerCase();

    if (Q2 == 'yes') {

        //console.log('you are wrong.')
        alert('you are wrong.');

    } else if (Q2 == 'no') {

        //console.log('you are right.')
        alert('you are right.')

        counter += 1;
    } else {
        alert("please enter yes or no")

    }
    return Q2;
}
Q2();
// Function Number 3
function Q3() {
    let Q3 = prompt('Did you think I like Pizza (yes/no)?');
    Q3 = Q3.toLowerCase();

    if (Q3 == 'yes') {

        //console.log('you are right.')
        alert('you are right.');
        counter += 1;

    } else if (Q3 == 'no') {
        //console.log('you are wrong.')
        alert('you are wrong.')
    } else {
        alert("please enter yes or no")
    }
    return Q3;
}
Q3();

// Function Number 4
function Q4() {
    let Q4 = prompt('Did you think I like programming (yes/no)?');
    Q4 = Q4.toLowerCase();

    if (Q4 == 'yes') {

        //console.log('you are right.')
        alert('you are right.');
        counter += 1;
    } else if (Q4 == 'no') {

        //console.log('you are wrong.')
        alert('you are wrong.')
    } else {
        alert("please enter yes or no")
    }
    return Q4;
}
Q4();

// Function Number 5
function Q5() {
    let Q5 = prompt('Did you think Jordan is my favorite country (yes/no)?');
    Q5 = Q5.toLowerCase();

    if (Q5 == 'yes') {

        //console.log('you are wrong.')
        alert('you are wrong.');
    } else if (Q5 == 'no') {

        //console.log('you are right.')
        alert('you are right.')
        counter += 1;
    } else {
        alert("please enter yes or no")
    }
    return Q5;

}
Q5();

//Function Number 6

function GuessNum1() {

    let weight = Number(prompt("guess my weight?"))

    if (weight == 110) {
        counter += 1;
        alert("right im " + weight)
    } else {
        for (let i = 0; i < 3; i++) {

            if (weight > 110)
                alert("weight is too high")

            if (weight < 110)
                alert("weight is too low")

            weight = Number(prompt("What is my weight? , the choices are 100, 110, 120"))

            if (weight == 110) {
                counter += 1;
                alert("right im " + weight)
                break;
            }
        }
        if (weight != 110)
            alert("the right answer for my weight is 110")
    }
    return GuessNum1;
}
GuessNum1();


// Function Number 7


let myFavoriteFruit = ["apple", "strawberry", "watermelon"];

let boolean = false;

function GuessNum2() {
    let FavoriteFruit = prompt("guess my favorite fruit you can choose one of these options(apple / orange / watermelon / strawberry / peach / banana)")

    FavoriteFruit = FavoriteFruit.toLowerCase();


    for (let j = 0; j < 5; j++) {

        for (let i = 0; i < myFavoriteFruit.length; i++) {

            if (FavoriteFruit == myFavoriteFruit[i]) {
                alert("thats a right answer")
                boolean = true;
                break;
            }
        }

        if (boolean == false) {
            alert("thats not right try again")
            FavoriteFruit = prompt("guess my favorite fruit you can choose one of these options(apple / orange / watermelon / strawberry / peach / banana)")
            FavoriteFruit = FavoriteFruit.toLowerCase()
        }
        if (boolean == true) {
            counter += 1;
            break;
        }

    }
    if (boolean == false) {
        alert("the right answer is apple, strawberry, watermelon")

    }
    alert("Thanks for your time " + "  " + name + " your score from 7 is " + counter);
    return GuessNum2;
}
GuessNum2();