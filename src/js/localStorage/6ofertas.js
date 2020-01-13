const ofertas = [
  {
    title: "Ofertas",
    bannerInfo: {
      img: "http://juni.com.br/img/reserva/T011/ofertas.png",
      header: "Descontos irresistíveis",
      description: "Pra não deixar nenhuma peça no carrinho",
      url: "",
      theme: "dark"
    },
    itens: [
      {
        title: "Ofertas",
        href: "https://www.usereserva.com/c/adulto/reserva/reserva-bazar",
        itens: [
          {
            title: "Camisetas",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-camisetas"
          },
          {
            title: "Camisas",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-camisas"
          },
          {
            title: "Polos",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-polos"
          },
          {
            title: "Casacos",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-casacos"
          },
          {
            title: "Bermudas",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-bermudas"
          },
          {
            title: "Calças",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-calcas"
          },
          {
            title: "Calçados",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-calcados"
          },
          {
            title: "Esporte",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-esporte"
          },
          {
            title: "Acessórios",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-acessorios"
          },
          {
            title: "Cuecas",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-cuecas"
          },
          {
            title: "Sungas",
            href:
              "https://www.usereserva.com/c/adulto/bazar/reserva-bazar-sungas"
          }
        ]
      }
    ]
  }
];

const arr = JSON.parse(localStorage.getItem("t011_itens_menu"));

localStorage.setItem("t011_itens_menu", JSON.stringify([...arr, ...ofertas]));
