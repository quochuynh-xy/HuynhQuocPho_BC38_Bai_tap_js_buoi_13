// Tính tiền lương
function exam1() {
  var workDay = document.getElementById("totalWorkDay").value;
  salary = workDay * 100000;
  document.getElementById("totalSalary").innerHTML =
    "Tiền lương của bạn là: " + salary;
}
//tính Trung Bình
function exam2() {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var num4 = document.getElementById("num4").value * 1;
  var num5 = document.getElementById("num5").value * 1;
  var average = (num1 + num2 + num3 + num4 + num5) / 5;
  document.getElementById("average5Numbers").value = average;
}
//Quy đổi tiền USD => VNĐ
function exam3() {
  var usd = document.getElementById("usdCount").value * 1;
  var vnd = document.getElementById("vndCount");
  vnd.innerHTML = "Đổi được: " + usd * 23500 + " VNĐ";
}
//Tính diện tích và chu vi của HCN
function exam4() {
  var width = document.getElementById("width").value * 1;
  var height = document.getElementById("height").value * 1;
  var area = width * height;
  var perimeter = (width + height) * 2;
  document.getElementById("area").innerHTML = "Diện tích của hình: " + area;
  document.getElementById("perimeter").innerHTML =
    "Chu vi của hình: " + perimeter;
}
//Tính tổng ký số
function exam5() {
  var number = document.getElementById("number").value * 1;
  var dozens;
  var units;
  dozens = Math.floor(number/10);
  units = number % 10;
  var sum = document.getElementById("sumNumber");
  sum.innerHTML = "Tổng hai ký số: " + (dozens + units);
}
