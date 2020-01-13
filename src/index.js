import Header from "./js/class/Header";
import "./scss/index.scss";

// Vai determinar se o menu deve ou não ser montado
function shouldBuild() {
  const url = location.href;
  const menu = document.querySelector(".juni-new-header-desktop");

  // Não pode ser renderizado na página de carrinho
  // e não pode existir o menu
  return !url.includes("/cart") && !menu;
}

function OnLocationChange(_callback) {
  let old = window.location.href;
  setInterval(() => {
    const nUrl = window.location.href;
    if (old !== nUrl) {
      _callback(old, nUrl);
      old = nUrl;
    }
  }, 200);
}

if (shouldBuild()) {
  new Header();
}

OnLocationChange((o, n) => {
  setTimeout(() => {
    if (shouldBuild()) {
      new Header();
    }
  }, 2000);
});
