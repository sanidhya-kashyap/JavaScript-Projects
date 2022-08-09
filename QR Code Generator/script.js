const wrapper = document.querySelector(".wrapper"),
qrinput = wrapper.querySelector(".form input"),
documentBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img")


documentBtn.addEventListener("click", ()=>{
    let qrValue = qrinput.value;
    if(!qrValue) return;
    documentBtn.innerText = "Generating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}&bgcolor=607EAA`;
    qrImg.addEventListener("load", () =>{
        wrapper.classList.add("active");
        documentBtn.innerText = "Generate QR Code"

    });
});

qrinput.addEventListener("keyup", () =>{
    if(!qrinput.value) {
        wrapper.classList.remove("active");
    }
});