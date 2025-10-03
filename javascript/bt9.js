//Khai báo dữ liệu
age = Number(prompt("Nhập tuổi:"));
let role = prompt("Vai trò của bạn?");

//Kiểm tra và in thông tin
if (isNaN(age)) {
  alert("Số tuổi không hợp lệ");
} else {
  if (role === "admin" || (role === "user" && age >= 18)) {
    console.log("Được truy cập");
  } else {
    console.log("Không được truy cập");
  }
}
