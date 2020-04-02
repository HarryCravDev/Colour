// Variables
let numSquares = 6;
let colors = randomColor(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let resetBtn = document.querySelector('#reset');
let easyBtn = document.getElementById('#easyBtn');
let hardBtn = document.getElementById('#hardBtn');
let topSection = document.querySelector('.title');



// Easy & Hard Button - Switching styles
easyBtn.addEventListener('click', function() {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    // Setting Game to easy 3 Squares
    colors = randomColor(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    numSquares = 3;

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    
    message.textContent = '';
});

hardBtn.addEventListener('click', function() {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    // Setting Game to hard 6 squares
    colors = randomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    numSquares = 6;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
    message.textContent = '';
});

// Reset Button Function
resetBtn.addEventListener('click', function() {

    colors = randomColor(numSquares);
    // pick a new color from array
    pickedColor = pickColor();
    // Change span to RBG
    colorDisplay.textContent = pickedColor;
    // Squares new color
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // Reset Button text & H1 background Color
    resetBtn.textContent = 'New Colors?';
    message.textContent = '';
});

// Span tag showing RGB value - *** Place element below in document *** 
colorDisplay.textContent = pickedColor;

// Loop involves - Applying Color, Checking guess, Square Color background change, Message right/wrong
for (let i = 0; i < squares.length; i++) {
    // Applying color to squares
    squares[i].style.backgroundColor = colors[i];

    // Click listeners
    squares[i].addEventListener("click", function() {
        // grab selected color
        let clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!";
            topSection.style.backgroundColor = clickedColor;
            resetBtn.textContent = 'Play Again?';
            changeColors(pickedColor);
        } else {
            this.style.backgroundColor = "#343a40";
            message.textContent = "Wrong!";
        }
    });
}

// Change all squares to Winning Color
function changeColors(color) {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// To pick random color out of Array and assign to PickedColor variable
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//  Random Color variableArray *
function randomColor(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomRgb());
    }
    return arr;
}

// random RGB generater - Create random RGB values *
function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
