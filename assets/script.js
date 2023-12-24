const specialLink = document.getElementById("specialLink");
const encourage = document.getElementById("encourage");
const clickCountElement = document.getElementById("clickCount");
let clickCount = 0;

specialLink.addEventListener("click", (event) => {
  event.preventDefault();
  clickCount++;

  clickCountElement.textContent = clickCount.toString();

  if (clickCount >= 50) {
    encourage.innerHTML = "Just keep clicking...";
  }
  if (clickCount >= 200) {
    encourage.innerHTML = "Making some progress...";
  }
  if (clickCount >= 400) {
    encourage.innerHTML = "Are you tired of clicking yet?";
  }
  if (clickCount >= 500) {
    encourage.innerHTML = "At least you're not playing anymore games";
  }
  if (clickCount >= 600) {
    encourage.innerHTML =
      "Well, this is kind of a game.  Like Cookie Clicker, but no cookies";
  }
  if (clickCount >= 700) {
    encourage.innerHTML = "Have you gotten over it yet?";
  }
  if (clickCount >= 750) {
    encourage.innerHTML = "Avatar state, yip yip!";
  }
  if (clickCount >= 800) {
    encourage.innerHTML = "Yip fucking yip?  You have got to be shitting me.";
  }
  if (clickCount >= 850) {
    encourage.innerHTML =
      "Honestly, that was the best The Ember Island Players could come up with?  They're supposed to be one of the most reputable acting companies in the Fire Nation.  What happened to research?  What happened to people taking this shit seriously?  You're telling me you know all of this fucking information, but no one told you how the actual Avatar, who has existed for generations by the way, enters the Avatar state?";
  }
  if (clickCount >= 900) {
    encourage.innerHTML = "Fucking bullshit.";
  }
  if (clickCount >= 950) {
    encourage.innerHTML =
      "I know I've been dragging this out for awhile, but it still baffles me.";
  }
  if (clickCount >= 1000) {
    // Redirect to finished.html when click count reaches 500
    window.location.href = "../finished.html";
  }
});
