let i=0
function dangky()
{
    let ten = document.getElementById("hoten").value
    let erten = document.getElementById("errten")
    let regexten = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/
    if(ten.trim() =="")
    {
        erten.innerHTML="* Tên không được rỗng"
        return false
    }else if (!regexten.test(ten))
    {
        erten.innerHTML="* Viết hoa mỗi kí tự đầu và ít nhất 2 từ"
        return false
    }
    erten.innerHTML="(*)"
     let phone = document.getElementById("sdt").value
     let erphone = document.getElementById("errsdt")
     let regexphone = /^[0-9]{3}\-[0-9]{6}$/
     if(!regexphone.test(phone))
     {
        erphone.innerHTML = "* Gồm 9 kí tự số (XXX-YYYYYY)"
        return false
     }
     erphone.innerHTML="(*)"

     let birth = document.getElementById("date").value;
let erdate = document.getElementById("errdate");


let birthDate = new Date(birth);


let currentDate = new Date();
let age = currentDate.getFullYear() - birthDate.getFullYear();


if (age < 15 || age > 18) {
  erdate.innerHTML = "Tuổi phải từ 15 đến 18";
  return false;
} else {
  erdate.innerHTML = "(*)";
}


    
     let diachi =document.getElementById("addr").value

     let khoa = document.getElementById("khoa").value
     let hocphi = document.getElementById("hp")
     if(khoa =="Khóa 2 tuần")
     {
        hocphi.value = "5,000,000"
        hocphi="5,000,000"
     }
     else if(khoa =="Khóa 4 tuần")
     {
        hocphi.value = "8,000,000"
        hocphi="8,000,000"
     }
     else{
        hocphi.value = "9,000,000"
        hocphi="9,000,000"
     }

     let avt = document.getElementById("avt");
    let erravt = document.getElementById("erravt");

    let regexavt = /^[A-Za-z0-9]+\.(jpg|png|gif)$/i;


    if (!regexavt.test(avt.files[0].name)) {
      erravt.innerHTML = "Ảnh phải có định dạng .jpg .png hoặc .gif";
      return false;
    } 
      erravt.innerHTML = "(*)";
    
      let row="<tr><td>"+(++i)+"</td><td>"+ten+"</td><td>"+phone+"</td><td>"+birth+"</td><td>"+diachi+"</td><td>"+khoa+"</td><td>"+hocphi+"</td></tr>"
            let mytable=document.getElementById("xuat")
            let newRow=mytable.insertRow(mytable.rows.length)
            newRow.innerHTML=row
            return true

}