//Khai báo dữ liệu
let input = prompt("Nhập số tuổi:");
let age = Number(input);

//Kiểm tra và in thông tin
if (isNaN(age)) {
  alert("Bạn phải nhập số!");
} else {
  if (age < 18) {
    console.log("Bạn là Trẻ em");
  } else {
    if (age >= 18 && age < 31) {
      console.log("Bạn đã Trưởng thành");
    } else {
      if (age >= 31 && age < 51) {
        console.log("Bạn là Trung niên");
      } else {
        console.log("Bạn là Cao niên");
      }
    }
  }
}
