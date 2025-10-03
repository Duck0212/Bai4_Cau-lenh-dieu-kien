//Khai báo dữ liệu
let day = prompt("Nhập số: (1-7)");

//Kiểm tra và in thông tin
switch (day) {
  case "1":
    alert("Thứ Hai");
    break;
  case "2":
    alert("Thứ Ba");
    break;
  case "3":
    alert("Thứ Tư");
    break;
  case "4":
    alert("Thứ Năm");
    break;
  case "5":
    alert("Thứ Sáu");
    break;
  case "6":
  case "7":
    alert("Nghỉ ngơi");
    break;
  default:
    alert("Bạn phải nhập số từ 1 đến 7");
}
