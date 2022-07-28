function sum() {
    var num = parseInt(document.getElementById('number').value);
    var sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    document.getElementById('result').value = sum;
}