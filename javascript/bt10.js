//Khai báo dữ liệu
let unit = prompt("Nhập đơn vị: (celsius/fahrenheit)");

//Kiểm tra và in thông tin
switch (unit) {
  case "C" || "celsius":
    let value1 = +prompt("Nhập giá trị:");
    if (value1 > -273) {
      console.log((value1 * 9) / 5 + 32, "fahrenheit");
    } else {
      alert("Giá trị celsius phải > -273");
    }
    break;
  case "F" || "fahrenheit":
    let value2 = +prompt("Nhập giá trị:");
    console.log(((value2 - 32) * 5) / 9, "celsius");
    break;
  default:
    alert("Đơn vị không lệ!");
}
