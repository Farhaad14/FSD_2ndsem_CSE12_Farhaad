function enterMarks(){

let subjects = document.getElementById("subject").value;

if(subjects <= 0){
alert("Enter valid number of subjects");
return;
}

let total = 0;

for(let i=1;i<=subjects;i++){

let marks = parseFloat(prompt("Enter marks for Subject " + i));

if(isNaN(marks)){
alert("Invalid input");
return;
}

total += marks;

}

let average = total / subjects;

let grade = "";
let status = "";

if(average >= 90){
grade = "A+";
}
else if(average >= 75){
grade = "A";
}
else if(average >= 60){
grade = "B";
}
else if(average >= 50){
grade = "C";
}
else{
grade = "F";
}

if(average >= 40){
status = "PASS";
}
else{
status = "FAIL";
}

document.getElementById("result").innerHTML =
"Average Marks: " + average.toFixed(2) + "<br>" +
"Grade: " + grade + "<br>" +
"Result: " + status;

}