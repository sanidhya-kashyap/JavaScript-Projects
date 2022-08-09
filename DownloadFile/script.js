const InputFile = document.querySelector('input'),
downloadBtn = document.querySelector('button');

downloadBtn.addEventListener("click", e =>{
    e.preventDefault();
    downloadBtn.innerHTML = "Downloading file...";
    fetchFile(InputFile.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
    downloadBtn.innerHTML = "Download file...";
    }).catch(() =>{
    downloadBtn.innerHTML = "Download file...";
    alert("Failed to download file");
    })
}