//A function that uses math random to pull an item from an array.
//This function was used in conjection with a button element. 
//Can use onClick="randomFunction()" 

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function randomFunction() {

    //randomly generates a number from 0 to 10.
    var randomNumber = Math.floor(Math.random() * 10);
    //changes an html element which contains an ID which is unique. In
    //this example, the function generates a number which is used to
    //pull an item in a array. randomNumber needs to be the length of
    //the array used.
    document.getElementById("random").innerHTML = myArray[randomNumber];
};
