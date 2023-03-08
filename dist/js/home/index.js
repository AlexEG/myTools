"use strict";
console.log("%c=>  frist code 2023-3-6  12:08 pm  <=", "color:#f00055;font-size:1.4rem");
const ToolsContainer = document.getElementById("ToolsContainer");
function toolCardTemplate(pageLink, imgURL, toolName, description) {
    let template = `
  <button class="button glow-effect" data-glow-offset="true">
  <a href="${pageLink}">
    <div class="tool__card">
      <div class="img">
        <img src="./images/${imgURL}" alt="${toolName} Banner" />
      </div>
      <div class="details">
        <h2>${toolName}</h2>
        <p>
        ${description}
        </p>
      </div>
    </div>
  </a>
  <svg class="glow-container">
    <rect
      pathLength="100"
      stroke-linecap="round"
      class="glow-blur"
    ></rect>
    <rect
      pathLength="100"
      stroke-linecap="round"
      class="glow-line"
    ></rect>
  </svg>
</button>`;
    return template;
}
ToolsContainer.innerHTML += toolCardTemplate(`./html/YouTube-Banner.html`, `youtube-banner.jpg`, `YouTube Banner`, `A simple tool that help me create a update my YOUTUBE channel
  easy & quickly.`);
ToolsContainer.innerHTML += toolCardTemplate(`#`, `password.webp`, `Passwords`, `A tool I used heavily to secure all my accounts with random
  strong passwords.`);
ToolsContainer.innerHTML += toolCardTemplate(`#`, `youtube-thumbnails.webp`, `youtube thumbnail`, `Just to challenge my self in css, plus I'm learing Canvas API so it's practice for me.`);
(function setGlowEffectRx() {
    const glowEffects = document.querySelectorAll(".glow-effect");
    glowEffects.forEach((glowEffect) => {
        const glowLines = glowEffect.querySelectorAll("rect");
        const rx = getComputedStyle(glowEffect).borderRadius;
        glowLines.forEach((line) => {
            line.setAttribute("rx", rx);
        });
    });
})();
//# sourceMappingURL=index.js.map