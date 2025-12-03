function makeBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyFancyStyle() {
    var textArea = document.getElementById("textArea");
    var fancyRadio = document.getElementById("fancyShmancy");
    
    if (fancyRadio.checked) {
        // FancyShmancy
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // BoringBetty
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function addMoo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    
    text = text.toUpperCase();
    
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() !== "") {
            sentences[i] = sentences[i] + "-MOO";
        }
    }
    text = sentences.join(".");
    
    textArea.value = text;
}
