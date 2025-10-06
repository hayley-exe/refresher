// Helper function: writes any HTML into the #out div
function render(html) {
    document.getElementById("out").innerHTML = html;
}

/*
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
    // TODO: Write your code here
    const name = prompt("What is your name?");
    if (!name) {
        render("<p>No name given (u have failed)</p>");
        return;
    }
    render(`<p>Hello, ${name}.</p>`);
}

/*
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers() {
    // TODO: Write your code here
    const nums = prompt("Enter numbers separated by comas");
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

    render(`<p>Average: <Strong>${avg.toFixed(2)}</Strong></p>
  <ul class="list-group">${list}</ul>`);
}

/*
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!"
*/
function timeOfDay() {
    // TODO: Write your code here
    const h = new Date().getHours();
    let msg = "";
    if (h < 12) msg = "Good Morning";
    else if (h > 18) msg = "Good Afternoon";
    else msg = "Good Evening";
    render(`<p>${msg}</p>`);
}

/*
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
    // TODO: Write your code here
    const min = parseInt(prompt("Enter a MIN Number"));
    const max = parseInt(prompt("Enter a MAX Number"));

    if (isNaN(min) || isNaN(max)) {
        render("Please Enter VALID Numbers");
        return;
    }
    if (min > max) {
        render("Minimum MUST be greater than the Maximum");
        return;
    }
    const rndNum = Math.floor(Math.random() * (max - min + 1) + min);
    render(
        `<p>Random number between ${min} and ${max}: <strong>${rndNum}</strong></p>`
    );
}

/*
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
    // TODO: Write your code here
    render(" ");
}

// ---- Event listeners for the demo buttons ----
document.getElementById("btnGreet").addEventListener("click", greet);
document.getElementById("btnAvg").addEventListener("click", averageNumbers);
document.getElementById("btnTime").addEventListener("click", timeOfDay);
document.getElementById("btnRandom").addEventListener("click", randomBetween);
document.getElementById("btnClear").addEventListener("click", clearOutput);
document.getElementById("btnName").addEventListener("click", siteName);
document.getElementById("btnColor").addEventListener("click", colorSwap);
document.getElementById("btnQuestion").addEventListener("click", colorQuestion);

function siteName() {
    let siteTitle = prompt('Rename The Site')
    document.getElementById('site').innerText = `${siteTitle}`
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
