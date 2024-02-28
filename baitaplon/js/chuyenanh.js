var danhSachAnh = [
    '../img/nen1.jpg',
    '../img/nen2.jpg',
    '../img/nen3.jpg',
    '../img/nen4.jpg',
    '../img/nen5.jpg',
    '../img/nen6.jpeg',
    '../img/nen7.jpeg',
    '../img/nen8.jpeg'
];

var index = 0;

function chuyenAnh() {
    index++;
    if(index >= danhSachAnh.length)index = 0;
    var anh=document.getElementById("anh");
    anh.src = danhSachAnh[index];
    document.getElementById("dem").innerHTML = ""+ index +"/8";
}
var ind=3;
function chuyenAnhNguoc()
{
    if(ind <0)ind = 3;
    var anh=document.getElementById("anh");
    anh.src = danhSachAnh[ind];
    ind--;
}
setInterval("chuyenAnh()", 2000);
