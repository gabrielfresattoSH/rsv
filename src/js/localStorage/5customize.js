const customize = [
  {
    title: "Customize",
    href:
      "https://www.usereserva.com/c/facavc/navega%C3%A7%C3%A3o-na-vitrine/faca-vc",
    bannerInfo: {
      img: "http://juni.com.br/img/reserva/T011/customize.png",
      header: "Você é quem manda",
      description:
        "Personalize camisetas como quiser: <br>cor, estampa, tamanho e quantidade",
      url: "",
      theme: "dark"
    },
    itens: [
      {
        title: "Camisetas",
        href:
          "https://www.usereserva.com/facavc/p/minha-camiseta-customizada-masculina/prod1760007?prodc=014",
        itens: [
          {
            title: "Masculino",
            href:
              "https://www.usereserva.com/facavc/p/minha-camiseta-customizada-masculina/prod1760007?prodc=014"
          },
          {
            title: "Feminino",
            href:
              "https://www.usereserva.com/facavc/p/minha-camiseta-customizada-feminina/prod1760008?prodc=014"
          },
          {
            title: "Menino",
            href:
              "https://www.usereserva.com/facavc/p/minha-camiseta-customizada-menino/prod1760009?prodc=014"
          },
          {
            title: "Menina",
            href:
              "https://www.usereserva.com/facavc/p/minha-camiseta-customizada-menina/prod1760010?prodc=014"
          }
        ]
      },
      {
        title: "OUTROS",
        itens: [
          {
            title: "BOLSA",
            href:
              "https://www.usereserva.com/facavc/p/minha-bolsa-customizada/prod1760005?prodc=014"
          },
          {
            title: "BODY",
            href:
              "https://www.usereserva.com/facavc/p/meu-body-customizado/prod1760011?prodc=040"
          },
          {
            title: "ALMOFADA",
            href:
              "https://www.usereserva.com/facavc/p/minha-almofada-customizada/prod1760004?prodc=029"
          }
        ]
      }
    ]
  }
];

const arr = JSON.parse(localStorage.getItem("t011_itens_menu"));

localStorage.setItem("t011_itens_menu", JSON.stringify([...arr, ...customize]));
