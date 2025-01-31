let qrText=document.getElementById("qrText");

let imgBox=document.getElementById("imgBox");

let qrImage=document.getElementById("qrImage");

let DownloadLink=document.getElementById("DownloadLink");

let DownloadButton=document.getElementById("Download");

DownloadButton.style.display="inline-block";

function generateQr(){
      qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
}