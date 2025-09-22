// ここからコードを書いてください
export default function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converter = document.querySelector('[data-tab="converter"]');
  const homeSec = document.getElementById("home");
  const converterSec = document.getElementById("converter");

  homeLink.addEventListener("click", () => {
    converterSec.classList.add("hidden");
    homeSec.classList.remove("hidden");
  });

  converter.addEventListener("click", () => {
    converterSec.classList.remove("hidden");
    homeSec.classList.add("hidden");
  });
}
