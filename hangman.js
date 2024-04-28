// JavaScript Document
//initialize array
let wordArr = ["cat", "george", "animal","rufus"];

//letting this array hold one word in the other array
let wordHold = wordArr[Math.floor(Math.random() * wordArr.length)];

//creating an array to hold the answers
let ans = [];


//loop to make the answer array to hold _ for the length of the word being guessed
for(let i=0; i < wordHold.length; i++){
    ans[i] = '_';
} 

//making an array to equal the length of the remaining answer
let remain = wordHold.length;

alert("the word is "+ans);//ouputs the initial word length tells you how many letters are to be answerd

//loop for the game
//while loop checks if the length of the remain is greater than 0 which means you will keep looping until the word is guessed
while (remain > 0) {
    let guess = window.prompt("Please enter a guess", " ");
    
    //loop breaks if nothing is entered
    if (guess == null) {
        break;
    }
    //loop to check the answer inputted if it is correct or not
    if (guess.length == 1 && (/[a-zA-Z]/).test(guess)) {
        let isCorrect = false; // Initialize a flag to check if the guess is correct.
        
        //for loop to go through the answer and check if the input is correct
        for (let j = 0; j < wordHold.length; j++) {
            if (wordHold[j] == guess) {
                ans[j] = guess;
                remain--;
                isCorrect = true; // Set the flag to true if the guess is correct.
            }
        }
        
        //displays message if is correct is false
        if (!isCorrect) {
            alert("Incorrect guess: " + guess + " is not in the word.");
        }
    } 
    //outputs if more than one letter is enterd
    else {
        alert("Invalid input: enter only one letter.");
    }
    //outputs the answer with the guess
    alert("The word is " + ans);
}

//outputting the answer array with the guess
alert(ans.join(" "));
//outputting the word
alert("Good job! The answer was " + wordHold);
