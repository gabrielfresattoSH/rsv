import waitForElement from "../../utils/waitForElement";
import wait from "../../utils/wait";

export default class Header {
  constructor() {
    this.gridHeader();
    this.moveSearchBar();
    this.juniCart();

    // Atualiza o carrinho
    this.cartAmount = 0;
    this.updateBagAmount(this.cartAmount);
  }

  // Cria todo o grid do header
  async gridHeader() {
    await waitForElement(() => document.querySelector(".menu_bar")).then(
      refElem => {
        const html = `
            <header class="juni-new-header-desktop">
                <img src="" alt="Logo mini reserva" class="logo-mini-rsv" />
                <div id="menu">Here comes the menu</div>
                <div id="juni-search-bar">
                    <button id="btn-search-copy" type="button">
                        buscar
                    </button>
                </div>
                <div class="juni-login-buy">
                    <button type="button" class="no-border">
                        Entrar
                    </button>
                    <button class="bordered buy" id="juni-cart-btn">
                        <span>Comprar</span>
                        <span id="juniBagAmount" class="cart-amount">
                            3
                        </span>
                    </button>
                </div>
            </header>
        `;

        refElem.insertAdjacentHTML("beforebegin", html);
      }
    );
  }

  // Move a busca pro novo menu
  async moveSearchBar() {
    waitForElement(() => document.getElementById("juni-search-bar")).then(
      async juniSearchContainer => {
        await waitForElement(() =>
          document.getElementById("CC-headerWidget-Search")
        ).then(defaultSearchInput => {
          juniSearchContainer.insertAdjacentElement(
            "afterbegin",
            defaultSearchInput
          );
        });
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
