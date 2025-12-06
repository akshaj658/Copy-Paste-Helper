const textBox = document.getElementById("textBox");
const copyBtn = document.getElementById("copyBtn");
const pasteBtn = document.getElementById("pasteBtn");
const status = document.getElementById("status");

copyBtn.addEventListener("click", function(){
    const text = textBox.value;

    navigator.clipboard.writeText(text)
    .then(() => {
        status.textContent = "Copied!";
    })

    .catch(() => {
        status.textContent = "Failed to Copy Text!";
    })
})

pasteBtn.addEventListener("click", function(){
    navigator.clipboard.readText()
    .then((clipText) => {
        textBox.value = clipText
        status.textContent = "Pasted!";
    })
    .catch(() => {
        status.textContent = "Failed to Paste Text!";
    })
})

