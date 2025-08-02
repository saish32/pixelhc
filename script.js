
function showTeamMember(imagePath) {
  const teamImage = document.getElementById("team-image");
  if (teamImage) {
    teamImage.src = imagePath;
    teamImage.style.display = "block";
  }
}


const teamNames = document.querySelectorAll(".team-list li");
teamNames.forEach((li) => {
  li.addEventListener("mouseout", () => {
    const teamImage = document.getElementById("team-image");
    teamImage.src = "";
  });
});
function showTeamMember(imagePath) {
  const teamImage = document.getElementById("team-image");
  if (teamImage) {
    teamImage.src = imagePath;
    teamImage.classList.add("show");
  }
}

teamNames.forEach((li) => {
  li.addEventListener("mouseout", () => {
    const teamImage = document.getElementById("team-image");
    teamImage.classList.remove("show");
    teamImage.src = "";
  });
});

  
  
  const isPageReloadOrDirect = (() => {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0) {
      return ["navigate", "reload"].includes(navEntries[0].type);
    }
    
    return performance.navigation.type === 0 || performance.navigation.type === 1;
  })();

  const loaderWrapper = document.getElementById("loader-wrapper");
  const mainContent = document.getElementById("main-content");
  const countElement = document.getElementById("loader-count");
  const nowText = document.getElementById("now-text");

  const cameFromExplore = sessionStorage.getItem("fromExplore");

  if (!cameFromExplore) {
    // Show loader on fresh visit
    document.body.classList.add("loading");

    let count = 0;
    let toggle = false;

    const counterInterval = setInterval(() => {
      if (count <= 100) {
        countElement.textContent = `${count} – 100`;
        count++;
      } else {
        clearInterval(counterInterval);
      }
    }, 20);

    const toggleInterval = setInterval(() => {
      toggle = !toggle;
      nowText.classList.toggle("alt", toggle);
    }, 400);

    setTimeout(() => {
      clearInterval(toggleInterval);
      document.body.classList.remove("loading");
    }, 3200);
  } else {

    loaderWrapper.style.display = "none";
    mainContent.style.display = "block";
    sessionStorage.removeItem("fromExplore"); 
  }

