let students = []


function addStudent(){

let name = document.getElementById("name").value
let roll = document.getElementById("roll").value
let math = Number(document.getElementById("math").value)
let science = Number(document.getElementById("science").value)
let english = Number(document.getElementById("english").value)

let student = {
    name:name,
    roll:roll,
    math:math,
    science:science,
    english:english
}

students.push(student)

alert("Student Added")

}


function displayStudents(){

let result = ""

for(let s of students){

let total = s.math + s.science + s.english
let avg = total / 3

result += `
<b>Name:</b> ${s.name} |
<b>Roll:</b> ${s.roll} |
<b>Total:</b> ${total} |
<b>Average:</b> ${avg.toFixed(2)}
<br><br>
`

}

document.getElementById("output").innerHTML = result

}


function showToppers(){

let result=""

for(let s of students){

let avg = (s.math + s.science + s.english)/3

if(avg > 80){

result += `${s.name} - Average: ${avg.toFixed(2)} <br>`

}

}

document.getElementById("output").innerHTML = result

}


function showFailed(){

let result=""

for(let s of students){

let avg = (s.math + s.science + s.english)/3

if(avg < 40){

result += `${s.name} - Average: ${avg.toFixed(2)} <br>`

}

}

document.getElementById("output").innerHTML = result

}


function countStudents(){

document.getElementById("output").innerHTML =
"Total Students: " + students.length

}