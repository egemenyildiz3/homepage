/* ==========================================================================
   HOMEPAGE CUSTOM SCRIPTS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Keyboard Shortcut: Press '/' to Focus Search, 'Esc' to Blur
  document.addEventListener("keydown", (e) => {
    const searchInput = document.querySelector("input[type='search'], input[placeholder*='Search']");
    if (!searchInput) return;

    if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      searchInput.focus();
    }

    if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.blur();
    }
  });

  // 2. Open Internal Homelab Links in New Tabs
  const setExternalLinks = () => {
    const links = document.querySelectorAll("a[href^='http://100.']");
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  };

  // 3. Time-Based Dynamic Greeting Header
  const setCustomGreeting = () => {
    const hour = new Date().getHours();
    let greeting = "Good Evening 🌙";
    
    if (hour < 12) greeting = "Good Morning ☀️";
    else if (hour < 18) greeting = "Good Afternoon 🌤️";

    const header = document.querySelector("header h1, .header-title");
    if (header && !document.getElementById("time-greeting")) {
      const greetingEl = document.createElement("span");
      greetingEl.id = "time-greeting";
      greetingEl.style.fontSize = "0.6em";
      greetingEl.style.display = "block";
      greetingEl.style.opacity = "0.7";
      greetingEl.innerText = greeting;
      header.appendChild(greetingEl);
    }
  };

  // Run after Next.js hydration completes
  setTimeout(() => {
    setExternalLinks();
    setCustomGreeting();
  }, 1000);
});