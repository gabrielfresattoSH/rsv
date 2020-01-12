import itens from "./data/itens";

export default class Menu {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.init();
  }

  init() {
    const { container } = this;
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
      const { title, bannerInfo, itens } = item;
      const li = document.createElement("li");
      li.innerText = item.title;
      menuContent.insertAdjacentElement("beforeend", li);

      li.addEventListener("mouseover", e => {
        // remove todos os links que possam estar com a classe active
        document
          .querySelectorAll(".active")
          .forEach(active => active.classList.remove("active"));
        e.target.classList.add("active");

        subs.classList.add("visible");

        if (itens) {
          this.openSubSubmenu(itens, bannerInfo);
        }
      });
    });
  }

  openSubSubmenu(_itens, bannerInfo) {
    const container = document.querySelector("#subs .itens");
    const fotoContainer = document.querySelector("#subs .foto");
    // Limpa qualquer conteudo anterior
    container.innerHTML = "";

    // Preenche os novos itens do menu
    _itens.forEach(i => {
      const { title, itens: subItens, href } = i;
      const div = document.createElement("div");
      div.innerHTML = "<h3>" + title + "</h3>";

      if (subItens) {
        subItens.forEach(sub => {
          const { title, href } = sub;
          const html = `<a href="${href}" alt="${title}">${title}</a>`;

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
