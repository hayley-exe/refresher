// Helper function: writes any HTML into the #out div
function render(html) {
    document.getElementById("out").innerHTML = html;
}

function greet() {
    const name = prompt("What is your name?");
    if (!name) {
        render("<p>No name given (u have failed)</p>");
        return;
    }
    render(`<p>Hello, ${name}.</p>`);
}

function averageNumbers() {
    const nums = prompt("Enter numbers separated by commas");
    if (!nums) {
        render("<p>No Numbers</p>");
        return;
    }
    const givenNums = nums.split(",").map((n) => parseFloat(n.trim()));
    const sum = givenNums.reduce((a, b) => a + b, 0);
    const avg = sum / givenNums.length;

    const list = givenNums
        .map((n) => `<li class="list-group-item">${n}</li>`)
        .join("");

    render(`<p>Average: <strong>${avg.toFixed(2)}</strong></p>
    <ul class="list-group">${list}</ul>`);
}

function timeOfDay() {
    const h = new Date().getHours();
    let msg = "";
    if (h < 12) msg = "Good Morning";
    else if (h < 18) msg = "Good Afternoon";
    else msg = "Good Evening";
    render(`<p>${msg}</p>`);
}

function randomBetween() {
    const min = parseInt(prompt("Enter a MIN Number"));
    const max = parseInt(prompt("Enter a MAX Number"));

    if (isNaN(min) || isNaN(max)) {
        render("<p>Please enter valid numbers</p>");
        return;
    }
    if (min > max) {
        render("<p>Minimum must be less than maximum</p>");
        return;
    }
    const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
    render(`<p>Random number between ${min} and ${max}: <strong>${rndNum}</strong></p>`);
}

function clearOutput() {
    render("Output cleared.");
}

function siteName() {
    let siteTitle = prompt("Rename the site");
    if (siteTitle) {
        document.getElementById("site").innerText = siteTitle;
    }
}

let colorIndex = 0;
const colors = ["red", "green", "blue", "orange", "purple", "brown"];

function colorSwap() {
    const out = document.getElementById("out");
    colorIndex = (colorIndex + 1) % colors.length;
    out.style.color = colors[colorIndex];
}

function colorQuestion() {
    const out = document.getElementById("out");
    const textColor = prompt("Enter a text color (e.g. red or #ff0000)");
    const bgColor = prompt("Enter a background color (e.g. black or #000000)");

    if (!textColor || !bgColor) {
        out.innerHTML = "<p>You must enter both colors!</p>";
        return;
    }

    out.style.color = textColor;
    out.style.backgroundColor = bgColor;
}

// Attach event listeners
document.getElementById("btnGreet").addEventListener("click", greet);
document.getElementById("btnAvg").addEventListener("click", averageNumbers);
document.getElementById("btnTime").addEventListener("click", timeOfDay);
document.getElementById("btnRandom").addEventListener("click", randomBetween);
document.getElementById("btnClear").addEventListener("click", clearOutput);
document.getElementById("btnName").addEventListener("click", siteName);
document.getElementById("btnColor").addEventListener("click", colorSwap);
document.getElementById("btnQuestion").addEventListener("click", colorQuestion);
