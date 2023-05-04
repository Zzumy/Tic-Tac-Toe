import { Elem } from "./Elem.js";

export class Jatekter {
  #lepes;
  #aktAllapotLista = [];
  constructor() {
    this.#lepes = 0;
    this.#aktAllapotLista = ["", "", "", "", "", "", "", "", ""];

    const szuloElem = $("article");
    for (let ix = 0; ix < 9; ix++) {
      const elem = new Elem(szuloElem, ix);
    }

    $(window).on("elemKattintas", (event) => {
      console.log(event.detail);
      let aktElem = event.detail;
      if (this.#lepes % 2 == 0) {
        aktElem.setElem("X");
        this.#aktAllapotLista[aktElem.ix] = "X";
      } else {
        aktElem.setElem("O");
        this.#aktAllapotLista[aktElem.ix] = "O";
      }
      this.#lepes++;
      this.#aktAllapotLista;
      this.ellenorzes();
    });
  }
  ellenorzes() {
    if (this.#aktAllapotLista[0]) {
    }
    return true;
  }
}
