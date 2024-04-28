let selected = localStorage.getItem("Answer");//getting the answer selected from the user using getitem
let question = localStorage.getItem("questions");//getting the questions that are being displayed using getitem
let score = localStorage.getItem("Score");//getting the score of the user using getitem 

let select = JSON.parse(selected);//putting the string from selected into select 
let ques = JSON.parse(question);//putting the string from question into ques
let totScore = JSON.parse(score);//putting the string from score into totscore
let questionsSection = document.getElementById("question");
let answersSection = document.getElementById("user");
let scoreSection = document.getElementById("grade");
scoreSection.innerHTML += "your total score is: "+ totScore;//the total score will be outputted into the innerhtml of the score section on the summary page 

//all the selected answer text in select will be outputted in the innerhtml for the user section in the summaryhtml
select.forEach(function (answer) {
    answersSection.innerHTML += answer + "<br>";
});

//all the questions in ques will be outputted in the innerhtml for the question section in the summaryhtml

ques.forEach(function (question) {
    questionsSection.innerHTML += question.Question + "<br>";  // Access the 'Question' property of the question object
});



