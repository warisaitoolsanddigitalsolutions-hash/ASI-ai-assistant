
const promptBox = document.getElementById("prompt");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "message " + type;
  div.textContent = text;
  messages.appendChild(div);
}

function sendMessage() {
  const text = promptBox.value.trim();
  if (!text) return;

  welcome.style.display = "none";
  addMessage(text, "user");
  promptBox.value = "";

  addMessage(
    "Hello! میں ASI ہوں۔ یہ ابھی تجرباتی Prototype ہے۔ حقیقی AI جوابات کے لیے AI API اور محفوظ Backend کنیکٹ کرنا باقی ہے۔",
    "asi"
  );
}

document.getElementById("send").addEventListener("click", sendMessage);

promptBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

function suggest(text) {
  promptBox.value = text;
  sendMessage();
}

document.getElementById("newChat").addEventListener("click", () => {
  messages.innerHTML = "";
  welcome.style.display = "block";
});
