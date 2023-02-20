let result = document.getElementById('result');

function insert(num) {
    result.value += num;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = "Error";
    }
}

function clearResult() {
    result.value = "0";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}
