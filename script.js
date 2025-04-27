let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let clickSound = document.getElementById('click-sound');

function append(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    clickSound.play();
}

function clearDisplay() {
    display.innerText = '0';
    clickSound.play();
}

function calculate() {
    try {
        let result = eval(display.innerText.replace('%', '/100*'));
        addToHistory(display.innerText + " = " + result);
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
    clickSound.play();
}

function square() {
    try {
        let num = parseFloat(display.innerText);
        let result = num * num;
        addToHistory(display.innerText + "² = " + result);
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
    clickSound.play();
}

function addToHistory(entry) {
    let li = document.createElement('li');
    li.innerText = entry;
    historyList.prepend(li);
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    clickSound.play();
}

function changeTheme(theme) {
    document.body.className = theme;
    clickSound.play();
}