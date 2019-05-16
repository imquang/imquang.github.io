// Hàm
function century(a)
{
    return Math.ceil(a/100);
}
 
// Lấy thông tin từ người dùng
var a = parseInt(prompt("Nhập năm a"));
 
// Tính
var theKy = century(a);
 
// In ra màn hình
document.write("Thế kỷ của năm " + a + " là " + theKy);