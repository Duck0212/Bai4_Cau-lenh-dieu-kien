//Khai báo dữ liệu
let input = prompt("Nhập số năm:");
let year = Number(input);

//Kiểm tra và in thông tin
if (isNaN(year)) {
  alert("Bạn phải nhập số!");
} else {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Đây là năm nhuận");
  } else {
    console.log("Đây không phải là năm nhuận");
  }
}
