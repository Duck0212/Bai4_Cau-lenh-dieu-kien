//Khai báo dữ liệu cho temp
let temp = +prompt("Nhập nhiệt độ hiện tại:");

//Kiểm tra temp
if (isNaN(temp)) {
  alert("Nhiệt độ không hợp lệ!");
} else {
  //Khai báo dữ liệu cho hasRain
  let hasRain = prompt("Tình trạng mưa: (co/khong)") === "co";

  //Kiểm tra activity
  let activity = hasRain ? "Ở nhà" : temp > 25 ? "Đi chơi" : "Ở nhà";

  //In thông tin
  console.log(activity);
}
