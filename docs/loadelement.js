function load(div) {

    var x = [
        "Home", "Servers", "Store", "Mods"];

    for (var i = 0; i < x.length; i++) {
        document.getElementById(x[i]).style.display = "none";
    }

    console.log(document.getElementById(div).style.display = "block");
}

window.onload = load('Home');