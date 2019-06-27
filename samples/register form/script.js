// function vietHoa(array) {
//     let arrTotal = "";
//     for (let i = 0; i < array.length; i++) {
//         let split = array[i].split(": ");
//         arrTotal += split[0].charAt(0).toUpperCase() + split[0].slice(1).toLowerCase();
//         arrTotal += ": " + split[1].charAt(0).toUpperCase() + split[1].slice(1).toLowerCase(); + "<br>"
//     }
//     document.write(arrTotal);
// }

//Viết hoa chữ cái đầu
function vietHoaChuCaiDau(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}