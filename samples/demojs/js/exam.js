//Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C
function bai1(cTemp) {
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C" + " bằng " + cToFahr + "\xB0F.";
    return (message);
}

//Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
function bai2(dataArray) {
    sortArray = dataArray.sort(function (a, b) { return b - a });
    return ("Số lớn thứ 2 trong mảng là: " + sortArray[1]);
}

//Bài 3: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng.
function bai3(dataArray) {
    var words = dataArray.split(' ');
    var maxLength = 0;
    var maxWodsLength;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxWodsLength = words[i];
        }
    }
    return maxWodsLength;
}  