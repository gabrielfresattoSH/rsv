import waitForElement from "../../utils/waitForElement";
import wait from "../../utils/wait";
import Menu from "./Menu/index";

export default class Header {
  constructor() {
    this.images = {
      logoReduzido: "http://juni.com.br/img/reserva/logo-reduzido-reserva.svg",
      logoReservaMini: "http://juni.com.br/img/reserva/reserva-mini.svg",
      lupa: "http://juni.com.br/img/reserva/search.svg",
      cart: "http://juni.com.br/img/reserva/bag-icon.svg"
    };

    this.gridHeader();
    this.searchBar();
    this.loginButtonConfig();
    this.juniCart();

    // Atualiza o carrinho
    this.cartAmount = 0;
    this.updateBagAmount(this.cartAmount);
  }

  // Cria todo o grid do header
  async gridHeader() {
    const { logoReduzido, logoReservaMini, cart: cartLogo, lupa } = this.images;
    await waitForElement(() => document.querySelector(".menu_bar")).then(
      refElem => {
        const isMini = window.location.href.includes("/infantil");
        const html = `
            <header class="juni-new-header-desktop">
              <div class="main-content">
                <a href="${
                  isMini
                    ? "https://www.usereserva.com/c/infantil/navega%C3%A7%C3%A3o-na-vitrine/infantil"
                    : "https://www.usereserva.com/"
                }" title="Ir para a home">
                  <img src="${
                    isMini ? logoReservaMini : logoReduzido
                  }" alt="Logo mini reserva" class="logo-mini-rsv" />
                </a>
                <div id="menu"></div>
                <div id="juni-search-bar">
                  <img src="${lupa}" alt="lupa" class="lupa" />
                  <button id="btn-search-copy" type="button">
                      buscar
                  </button>
                </div>
                <div class="juni-login-buy">
                    <button type="button" class="no-border" id="login-btn">
                      Entrar
                    </button>
                    <a href="/cart" class="bordered buy" id="juni-cart-btn">
                      <img src="${cartLogo}" alt="Logo mini reserva" class="logo-mini-rsv" />
                      <span>Comprar</span>
                      <span id="juniBagAmount" class="cart-amount">
                        3
                      </span>
                    </a>
                </div>
              </div>
              <div class="sub-itens-container" id="subs">
                <div class="content">
                  <div class="row">
                    <div class="first-half itens">
                      <h2>SALVE</h2>
                    </div>
                    <div class="second-half foto">
                      <div class="foto-content">
                        <h1 class="title">Reserva</h1>
                        <p class="description">
                          Confira os destaques <br>
                          da nossa coleção.
                        </p>
                        <a href="" class="ver-produtos" title="Ver produtos">
                          Ver produtos >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
        `;

        refElem.insertAdjacentHTML("beforebegin", html);

        // Insere o menu no novo header
        new Menu("#menu");
      }
    );
  }

  // Move a busca pro novo menu
  async searchBar() {
    waitForElement(() => document.getElementById("juni-search-bar")).then(
      async juniSearchContainer => {
        await waitForElement(() =>
          document.getElementById("CC-headerWidget-Search")
        ).then(defaultSearchInput => {
          defaultSearchInput.placeholder = "";
          juniSearchContainer.insertAdjacentElement(
            "afterbegin",
            defaultSearchInput
          );

          // Click no botão buscar
          document
            .querySelector("#btn-search-copy")
            .addEventListener("click", () => {
              document.getElementById("searchSubmit").click();
            });
        });
      }
    );
  }

  async loginButtonConfig() {
    function openLoginModal() {
      // Clique no botão original "minha conta"
      document.getElementById("CC-loginHeader-login").click();
      waitForLogin();
    }

    function waitForLogin() {
      wait(() => JSON.parse(localStorage.getItem("user"))).then(() => {
        wait(
          () => JSON.parse(localStorage.getItem("user")).loggedInUserName
        ).then(() => {
          const btnLoginCustom = document.getElementById("login-btn");
          btnLoginCustom.innerText = JSON.parse(
            localStorage.getItem("user")
          ).loggedInUserName;

          btnLoginCustom.addEventListener(
            "click",
            () => (window.location.href = "/profile?module=home-profile")
          );
        });
      });
    }

    await waitForElement(() => document.getElementById("login-btn")).then(
      btnLoginCustom => {
        const hasUser = JSON.parse(localStorage.getItem("user"));
        if (hasUser) {
          const loggedUser = hasUser.loggedInUserName;

          if (loggedUser) {
            btnLoginCustom.innerText = loggedUser;
            btnLoginCustom.addEventListener(
              "click",
              () => (window.location.href = "/profile?module=home-profile")
            );
          }
        } else {
          btnLoginCustom.addEventListener("click", openLoginModal);
        }
      }
    );
  }

  // Listener no botão da sacola
  juniCart() {
    waitForElement(() => document.getElementById("juni-cart-btn")).then(
      juniCartBtn => {
        juniCartBtn.addEventListener(
          "mouseover",
          () => (document.querySelector(".content").style.display = "block")
        );
      }
    );
  }

  waitForBagChange() {
    // Aguarda ter algo no localStorage de carrinho
    wait(() => !!localStorage.getItem("shoppingCart")).then(() => {
      // Aguarda a quantidade de itens no carrinho ser alterada
      wait(() => {
        const { cartAmount } = this;
        const { numberOfItems } = JSON.parse(
          localStorage.getItem("shoppingCart")
        );

        return cartAmount !== numberOfItems;
      }).then(() => {
        console.log("Mudou a quantidade do carrinho!!");
        const { updateBagAmount } = this;
        const { numberOfItems } = JSON.parse(
          localStorage.getItem("shoppingCart")
        );

        updateBagAmount(numberOfItems);
        this.cartAmount = numberOfItems;
      });
    });
  }

  updateBagAmount(number) {
    wait(() => !!document.querySelector("#juniBagAmount")).then(() => {
      const juniBag = document.querySelector(".juni-login-buy .cart-amount");

      juniBag.innerText = number;
      this.waitForBagChange();
    });
  }
}
