console.log(
  "%c=>  frist code 2023-3-6  12:08 pm  <=",
  "color:#f00055;font-size:1.4rem"
);

// template

const ToolsContainer: any = document.getElementById("ToolsContainer");

function toolCardTemplate(
  pageLink: string,
  imgURL: string,
  toolName: string,
  description: string
): string {
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

//  tools cards  //

// ToolsContainer.innerHTML += toolCardTemplate(`pageLink`,`imgURL`,`toolName`,`description`);

//*  => YouTube Banner <=
ToolsContainer.innerHTML += toolCardTemplate(
  `./html/YouTube-Banner.html`,
  `youtube-banner.jpg`,
  `YouTube Banner`,
  `A simple tool that help me create a update my YOUTUBE channel
  easy & quickly.`
);

//*  => Passwords <=
ToolsContainer.innerHTML += toolCardTemplate(
  `#`,
  `password.webp`,
  `Passwords`,
  `A tool I used heavily to secure all my accounts with random
  strong passwords.`
);

//*  => youtube thumbnail <=
ToolsContainer.innerHTML += toolCardTemplate(
  `#`,
  `youtube-thumbnails.webp`,
  `youtube thumbnail`,
  `Just to challenge my self in css, plus I'm learing Canvas API so it's practice for me.`
);

// hover effect tool__card
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
