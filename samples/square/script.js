// Hàm
function square(a)
{
    return a*a;
}
 
// Lấy thông tin từ người dùng
var a = parseInt(prompt("Nhập số a"));
 
// Tính bình phương
var binhPhuong = square(a);
 
// In ra màn hình
document.write("Bình phương của số " + a + " là " + binhPhuong);