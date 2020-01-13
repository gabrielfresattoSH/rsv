import novidades from "./1novidades";
import masculino from "./2masculino";
import infantil from "./3infantil";
import colabes from "./4colabes";
import customize from "./5customize";
import ofertas from "./6ofertas";

localStorage.setItem(
  "t011_itens_menu",
  JSON.stringify([
    ...novidades,
    ...masculino,
    ...infantil,
    ...colabes,
    ...customize,
    ...ofertas
  ])
);
