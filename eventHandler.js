/**
 * Created by Nadun on 13-Aug-15.
 */

var currentFormulaStatus;

function equalButton() {
    if (currentFormulaStatus == "append") {
        var display = document.getElementById("display");
        var currentFormula = document.getElementById("currentFormula");
        currentFormula.innerHTML = currentFormula.innerHTML + display.value;
        display.value = calculate(currentFormula.innerHTML);
    }
    currentFormulaStatus = "replace";
}

function negateButton() {
    if (currentFormulaStatus == "replace") {
        var currentFormula = document.getElementById("currentFormula");
        currentFormula.innerHTML = "";
    }
    var display = document.getElementById("display");
    if (display.value != "") {
        display.value = "-(" + display.value + ")";
    } else {
        display.value = "-";
    }
    currentFormulaStatus = "append";
}

function deleteButton() {
    if (currentFormulaStatus == "replace") {
        var currentFormula = document.getElementById("currentFormula");
        currentFormula.innerHTML = "";
    }
    var display = document.getElementById("display");
    display.value = display.value.substring(0, display.value.length - 1);
    currentFormulaStatus = "append";
}

function clearButton() {
    var display = document.getElementById("display");
    var currentFormula = document.getElementById("currentFormula");
    display.value = "";
    currentFormula.innerHTML = "";
    currentFormulaStatus = "replace";
}

function appendOperator(operator) {
    var currentFormula = document.getElementById("currentFormula");
    if (currentFormulaStatus == "replace") {
        currentFormula.innerHTML = "";
    }
    var display = document.getElementById("display");
    currentFormula.innerHTML = currentFormula.innerHTML + display.value + operator;
    display.value = "";
    currentFormulaStatus = "append";
}

function append(value) {
    if (currentFormulaStatus == "replace") {
        var currentFormula = document.getElementById("currentFormula");
        currentFormula.innerHTML = "";
    }
    var display = document.getElementById('display');
    display.value = display.value + value;
    currentFormulaStatus = "append";
}

function divideButton() {
    appendOperator("/")
}

function multiplyButton() {
    appendOperator("*");
}

function subButton() {
    appendOperator("-");
}

function plusButton() {
    appendOperator("+");
}

function dotButton() {
    append(".");
}

function zeroButton() {
    append(0);
}

function oneButton() {
    append(1);
}

function twoButton() {
    append(2);
}

function threeButton() {
    append(3);
}

function fourButton() {
    append(4);
}

function fiveButton() {
    append(5);
}

function sixButton() {
    append(6);
}

function sevenButton() {
    append(7);
}

function eightButton() {
    append(8);
}

function nineButton() {
    append(9);
}