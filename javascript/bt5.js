//Khai báo dữ liệu
let input = prompt("Nhập số điểm của bạn:");

//Kiểm tra và in thông tin
switch (true) {
  case input <= 100 && input >= 90:
    console.log("Xếp hạng của bạn là: Giỏi");
    break;
  case input <= 89 && input >= 70:
    console.log("Xếp hạng của bạn là: Khá");
    break;
  case input <= 69 && input >= 50:
    console.log("Xếp hạng của bạn là: Trung bình");
    break;
  case input < 50:
    console.log("Xếp hạng của bạn là: Yếu");
    break;
  default:
    alert("Bạn phải nhập số điểm từ 0 đến 100");
}
