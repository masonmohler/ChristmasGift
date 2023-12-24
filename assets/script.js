const specialLink = document.getElementById("specialLink");
const clickCountElement = document.getElementById("clickCount");
let clickCount = 0;

specialLink.addEventListener("click", (event) => {
  event.preventDefault();
  clickCount++;

  clickCountElement.textContent = clickCount.toString();

  if (clickCount >= 20) {
    // Redirect to finished.html when click count reaches 500
    window.location.href = "../finished.html";
  }
});
