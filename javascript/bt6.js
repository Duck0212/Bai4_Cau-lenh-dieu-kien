//Khai báo dữ liệu
let number = prompt("Nhập số cần kiểm tra:");

//Kiểm tra và in thông tin
switch (true) {
  case isNaN(number):
    alert("Bạn phải nhập số để kiểm tra!");
    break;
  case number % 2 === 0:
    console.log("Kiểm tra được số bạn vừa nhập là số Chẵn");
    break;
  default:
    console.log("Kiểm tra được số bạn vừa nhập là số Lẻ");
}
