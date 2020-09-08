function showInResultBox(pressedButton) {
    document.getElementById("resultBox").value += pressedButton;
}

function calculateResult() {
    let inputByUser = document.getElementById("resultBox").value;
    let finalResult = eval(inputByUser);
    document.getElementById("resultBox").value = "Answer " + finalResult;

}

function clearTheInput() {
    document.getElementById("resultBox").value = "";
}