//Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
    document.getElementById("gioithieu").style.color = 'blue';
    document.getElementById("dialy").style.color = 'yellow';
    document.getElementById("dulich").style.color = 'red';
}

//Thay đổi màu nền của trang thành màu color.
function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}

//hay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào có thể là id của 2 đoạn văn).
function copyContent(paragraph1, paragraph2) {
    var para2 = document.getElementById(paragraph2).innerHTML;
    document.getElementById(paragraph1).innerHTML = para2;
}

//Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x) {
    document.getElementsByClassName("container")[0].style.fontSize = x + 'px';
}

//Tăng kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels
function increaseFontSize(paragraph) {
    var x = document.getElementById(paragraph).style.fontSize;
    document.getElementById(paragraph).style.fontSize = '110%';
}

//Giảm kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.
function decreaseFontSize(paragraph) {
    document.getElementById(paragraph).style.fontSize = '90%';
}