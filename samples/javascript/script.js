//Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên
function bai5ob(students) {
    let avg = 0;
    let sum = 0;
    for (i = 0; i < students.length; i++) {
        sum += students[i].age;
    }
    avg = sum / students.length;
    return avg;
}

let studentsList1 = [
    { name: 'Phạm', age: 12, gender: 'Male' },
    { name: 'Thanh', age: 14, gender: 'Female' },
    { name: 'Quang', age: 20, gender: 'Male' },
    { name: 'Nguyễn', age: 22, gender: 'Male' },
    { name: 'Linh', age: 9, gender: 'Female' },
];

let studentsList2 = [
    { name: 'Thanh', age: 3, gender: 'Female' },
    { name: 'Quang', age: 4, gender: 'Male' },
    { name: 'Linh', age: 5, gender: 'Female' },
];

//Tính tổng của 1 mảng bất kỳ
function tinhtong(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "number") {
            sum += arr[i];
        }
    }
    return sum;
}

//Tính tổng độ dài của các chuỗi trong mảng
function tinhtong2(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "string") {
            sum += arr[i].length;
        }
    }
    return sum;
}

//Tìm ra chuỗi có độ dài lớn nhất
function fillterArr(arr) {
    let maxLength = arr.sort(function (a, b) { return (b.length - a.length) })[0];
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (maxLength.length == arr[i].length) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false
function isPrimeNumber(number) {
    let square = Math.sqrt(number);
    if (!Number.isInteger(number) || number < 2) {
        return false;
    }
    for (i = 2; i <= square; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

//Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu
function theTichHinhCau(r) {
    theTich = 4 / 3 * Math.PI * (r * r * r);
    return (theTich);
}

//Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7)
function tinhTongCacSoNguyen(num1, num2) {
    let sum = 0;
    if (Number.isInteger(num1) || Number.isInteger(num2)) {
        for (i = num1 + 1; i < num2; i++) {
            sum += i
        }
        return sum;
    }
}

//Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào
function tinhTongCacSoNguyenTo(number) {

}