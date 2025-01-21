function findLargestNumeber() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    var findLargestNumeber = Math.max(num1, num2, num3);
        document.getElementById("result").innerHTML = "The largest number is:" + LargestNumeber;
}
