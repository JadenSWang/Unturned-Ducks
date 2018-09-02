function load(div) {

    var x = [
        "RP", "PVP", "Servers", "Mods"];

    for (var i = 0; i < x.length; i++) {
        document.getElementById(x[i]).style.display = "none";
    }

    console.log(document.getElementById(div).style.display = "block");
}

window.onload = load('Servers');

function copy(toCopy) {
    document.getElementById('ip').value = toCopy
    var copyText = document.getElementById("ip");
    copyText.select();
    document.execCommand("copy");
    alert("Port: " + copyText.value +  " Copied To Clipboard");
}