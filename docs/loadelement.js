function copy(toCopy) {
    document.getElementById('ip').value = toCopy
    var copyText = document.getElementById("ip");
    copyText.select();
    document.execCommand("copy");
    alert("Port: " + copyText.value +  " Copied To Clipboard");
}