//Khai báo dữ liệu
let input = prompt("Nhập số nguyên:");
let number = Number(input);

//Kiểm tra và in thông tin
if (isNaN(number)) {
  alert("Bạn phải nhập số!");
} else {
  if (input > 0) {
    console.log("Số nguyên vừa nhập là số dương");
  } else {
    if (input < 0) {
      console.log("Số nguyên vừa nhập là số âm");
    } else {
      console.log("Số nguyên vừa nhập là số zero");
    }
  }
}
