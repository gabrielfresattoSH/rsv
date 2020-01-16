// import itens from "./data/itens";

export default class Menu {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.init();
  }

  init() {
    const { container } = this;
    const itens = JSON.parse(localStorage.getItem("t011_itens_menu"));
    const subs = document.getElementById("subs");
    // Cria a ul que vai conter os itens do menu
    container.insertAdjacentHTML(
      "afterbegin",
      "<ul id='menu-content' class='menu-content'></ul>"
    );

    const menuContent = document.getElementById("menu-content");
    subs.addEventListener("mouseleave", () => {
      subs.classList.remove("visible");
      document.querySelector("li.active").classList.remove("active");
    });

    itens.forEach(item => {
      const { title, bannerInfo, itens, href } = item;
      const li = document.createElement("li");
      li.innerHTML = `<a href="${href}" alt="${title}">${title}</a>`;
      menuContent.insertAdjacentElement("beforeend", li);

      li.addEventListener("mouseover", e => {
        // Verifica se é infantil, caso seja, aumenta o width do conteúdo
        // de dentro do menu
        const infantil = e.target.innerText.toLowerCase().includes("infantil");
        const menuContentFHalf = document.querySelector(".first-half");

        if (infantil) {
          menuContentFHalf.classList.add("infantil");
        } else {
          const hasInfantil = menuContentFHalf.classList.contains("infantil");
          if (hasInfantil) {
            menuContentFHalf.classList.remove("infantil");
          }
        }
        // remove todos os links que possam estar com a classe active
        document
          .querySelectorAll(".active")
          .forEach(active => active.classList.remove("active"));
        e.target.classList.add("active");

        subs.classList.add("visible");

        if (itens) {
          this.openSubSubmenu(itens, bannerInfo, title);
        }
      });
    });
  }

  // Altera a padding do submenu, pra ficar alinhado com os
  // itens do header (novidade, masculino, etc..)
  setPaddingSubMenu() {
    const pdLeft = document.querySelector("#menu ul li").offsetLeft;
    document.querySelector("#subs").style.paddingLeft = pdLeft + 5 + "px";
  }

  openSubSubmenu(_itens, bannerInfo, title) {
    this.setPaddingSubMenu();
    function fotoClass(txt) {
      if (txt === "Ofertas") {
        return "ofertas";
      }

      if (txt === "Masculino") {
        return "masculino";
      }
      if (txt === "Infantil") {
        return "infantil";
      }
      if (txt === "Parcerias & Colabes") {
        return "parcerias";
      }
      if (txt === "Customize") {
        return "customize";
      }
    }

    const _class = fotoClass(title);
    const container = document.querySelector("#subs .itens");
    const fotoContainer = document.querySelector("#subs .foto");
    fotoContainer.classList = "second-half foto " + _class;
    // Limpa qualquer conteudo anterior
    container.innerHTML = "";

    // Preenche os novos itens do menu
    _itens.forEach(i => {
      const { title, itens: subItens, href } = i;
      const div = document.createElement("div");
      div.innerHTML = "<a href=" + href + " class='sub-ttl'>" + title + "</a>";

      if (subItens) {
        subItens
          .filter((sub, index) => index < 12)
          .forEach(sub => {
            const { title, subHref } = sub;
            const html = `<a href="${subHref}" alt="${title}">${title}</a>`;
            div.insertAdjacentHTML("beforeend", html);
          });
      }

      // Adiciona a subcategoria ao menu
      container.insertAdjacentElement("beforeend", div);
    });

    // Atualiza os links e os textos do conteudo dentro do banner
    const {
      img: imgUrl,
      header: titleHtml,
      description,
      url,
      theme
    } = bannerInfo;
    const fotoContent = fotoContainer.querySelector(".foto-content");
    // Atualiza o titulo, desc, link e a imagem do banner
    fotoContainer.style.backgroundImage = `url(${imgUrl})`;
    fotoContainer.querySelector(".title").innerHTML = titleHtml;
    fotoContainer.querySelector(".description").innerHTML = description;
    fotoContainer.querySelector(".ver-produtos").href = url;

    // Atualiza a classe com o tema
    fotoContent.classList.remove("dark", "light");
    fotoContent.classList.add(theme);
  }
}
