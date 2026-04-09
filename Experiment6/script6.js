let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;


document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});


document.getElementById("bgColorBtn").onclick = function () {
    document.body.style.backgroundColor ="red";
       
};


document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});


document.getElementById("resetBtn").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
    fontSize = 16;
});