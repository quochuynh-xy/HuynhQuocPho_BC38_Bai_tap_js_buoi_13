// Tính tiền lương
function tinhTienLuong() {
  var ngayCong = document.getElementById("tongSoNgayCong").value;
  tongLuong = ngayCong * 100000;
  document.getElementById("tongLuong").innerHTML =
    "Tiền lương của bạn là: " + tongLuong;
}
var tongTienLuong = document.getElementById("tinhTienLuong");
tongTienLuong.onclick = tinhTienLuong;
//tính Trung Bình
function trungBinh() {
  var soThuNhat = document.getElementById("soThu1").value * 1;
  var soThuHai = document.getElementById("soThu2").value * 1;
  var soThuBa = document.getElementById("soThu3").value * 1;
  var soThuTu = document.getElementById("soThu4").value * 1;
  var soThuNam = document.getElementById("soThu5").value * 1;
  var trungBinhCong = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.getElementById("ketQuaTrungBinh").value = trungBinhCong;
}
var trungBinhCong = document.getElementById("tinhTrungBinh");
trungBinhCong.onclick = trungBinh;
//Quy đổi tiền USD => VNĐ
function chuyenDoiTien() {
  var soLuongUSD = document.getElementById("soLuongUSD").value;
  soLuongUSD = Number(soLuongUSD);
  var soTienVND = document.getElementById("soTienVND");
  soTienVND.innerHTML = "Đổi được: " + soLuongUSD * 23500 + " VNĐ";
}
var tinhTien = document.getElementById("doiTien");
tinhTien.onclick = chuyenDoiTien;
//Tính diện tích và chu vi của HCN
function dienTich_chuVi() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  // var dienTich = document.getElementById('dienTichHCN');
  // var chuVi = document.getElementById('chuViHCN');
  chieuDai = Number(chieuDai);
  chieuRong = Number(chieuRong);
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("dienTichHCN").innerHTML ='Diện tích của hình: ' + dienTich;
  document.getElementById("chuViHCN").innerHTML ='Chu vi của hình:' + chuVi;
}
var tinhDienTich_ChuVi = document.getElementById("dienTich_chuVi");
tinhDienTich_ChuVi.onclick = dienTich_chuVi;
//Tính tổng ký số
function tongKySo () {
  var number = document.getElementById('number').value;
  var soHangChuc;
  var soHangDonVi;
  number = Number(number);
  soHangChuc = parseInt(number/10);
  soHangDonVi = number%10;
  var thongBao = document.getElementById('tongKySo');
  thongBao.innerHTML = 'Tổng hai ký số: '+ (soHangChuc + soHangDonVi);
}
var tinhTongKySo = document.getElementById('tinhTongKySo');
 tinhTongKySo.onclick = tongKySo;