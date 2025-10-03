//Khai báo dữ liệu cho num1
let num1 = Number(prompt("Nhập số thứ nhất:"));

//Kiểm tra num1
if (isNaN(num1)) {
  alert("Bạn cần nhập số!");
} else {
  //Khai báo dữ liệu cho num2
  let num2 = Number(prompt("Nhập số thứ hai:"));

  //Kiểm tra num2
  if (isNaN(num2)) {
    alert("Bạn cần nhập số!");
  } else {
    //Khai báo dữ liệu cho op
    let op = prompt("Nhập toán tử trong phạm vi: =, -, *, /");

    //Kiểm tra op và tính kết quả
    switch (op) {
      case "+":
        console.log("Kết quả:", num1 + num2);
        break;
      case "-":
        console.log("Kết quả:", num1 - num2);
        break;
      case "*":
        console.log("Kết quả:", num1 * num2);
        break;
      case "/":
        console.log("Kết quả:", num1 / num2);
        break;
      default:
        alert("Chỉ được nhập các toán tử: +, -, *, /");
    }
  }
}
