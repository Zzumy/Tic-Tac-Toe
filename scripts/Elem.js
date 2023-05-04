export class Elem {
  constructor(szuloElem, ix) {
    this.ix = ix;

    szuloElem.append(`<div class="elem"><p></p></div>`);

    this.divElem = $("article div:last-child");

    this.pElem = $("article div:last-child p");

    this.divElem.on("click", () => {
      this.esemenyTrigger();
    });
  }

  setElem(ertek) {
    this.pElem.text(ertek);
  }
  esemenyTrigger() {
    const esemeny = new CustomEvent("elemKattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
