/*
Creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi. 
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:

1. Proprietà **private**:
    - `marca`: una stringa che rappresenta la marca del veicolo.
    - `anno`: un numero intero che rappresenta l'anno di fabbricazione del veicolo.
    - `colore`: una stringa che rappresenta il colore del veicolo.
2. Metodi:
    - `informazioni()`: un metodo che restituisce una stringa contenente tutte le informazioni del veicolo (marca, anno e colore).
    - `annoAttuale()`: un metodo che restituisce l'anno corrente (puoi utilizzare la classe `Date` di JavaScript per ottenere l'anno corrente).
    - `calcolaEta()`: un metodo che calcola e restituisce l'età del veicolo in anni (differenza tra l'anno corrente e l'anno di fabbricazione).
*/

class Veicolo {
  #marca;
  #anno;
  #color;

  // conterrà un contatore di istanze della classe Veicolo
  static numIstanze = 0;

  /**
   * @param {string} marca
   * @param {string|number} anno
   */
  constructor(marca, anno) {
    // usiamo i setter marca e anno per validare i dati in ingresso
    this.marca = marca;
    this.anno = anno;

    // incrementiamo il contatore di istanze
    Veicolo.numIstanze++;
  }

  // GETTERS --------------------------------------------------------

  /**
   * @returns {string}
   */
  get marca() {
    return this.#marca;
  }

  /**
   * @returns {number}
   */
  get anno() {
    return this.#anno;
  }

  /**
   * @returns {string}
   */
  get color() {
    return this.#color;
  }

  get eta() {
    return this.#calcolaEta();
  }

  // SETTERS --------------------------------------------------------

  /**
   * @param {string} value
   */
  set marca(value) {
    if (!value || !value.trim()) {
      throw new Error("La marca è obbligatoria");
    }

    this.#marca = value.toLowerCase();
  }

  /**
   * @param {number|string} value
   */
  set anno(value) {
    if (value.toString().length < 4) {
      throw new Error("L'anno deve essere di 4 cifre");
    }

    this.#anno = +value;
  }

  /**
   * @param {string} value
   */
  set color(value) {
    this.#color = value;
  }

  // METODI --------------------------------------------------------

  /**
   * @returns {string}
   */
  informazioni() {
    return `Marca: ${this.#marca}, Anno: ${this.#anno}, Colore: ${this.#color}`;
  }

  /**
   * @returns {number}
   */
  annoAttuale() {
    return new Date().getFullYear();
  }

  /**
   * @returns {number}
   */
  #calcolaEta() {
    return this.annoAttuale() - this.#anno;
  }

  static creaIstanza(marca, anno) {
    return new Veicolo(marca, anno);
  }
}

const auto = new Veicolo("Fiat", 1978);

// auto.#marca
auto.color = "rosso";
// auto.marca = "Alfa Romeo";
// auto.anno = "2021";

// console.log(auto);
console.log(auto.informazioni());
console.log(auto.annoAttuale());
console.log(auto.eta);

/*
🔥 Estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". 
La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" 
e ne aggiunge alcuni specifici per le automobili.

La classe "Automobile" dovrebbe avere le seguenti caratteristiche:

1. Proprietà aggiuntive:
    - `numeroPorte`: un numero intero che rappresenta il numero di porte dell'automobile.
    - `isDiesel`: un valore booleano che indica se l'automobile funziona a diesel (true) o a benzina (false).
2. Metodo aggiuntivo:
    - `tipoCarburante()`: un metodo che restituisce una stringa indicando il tipo di carburante dell'automobile ("Diesel" se `isDiesel` è true, "Benzina" altrimenti).
 */
class Automobile extends Veicolo {
  #numeroPorte;
  #alimentazione;

  /**
   * @param {string} marca 
   * @param {string|number} anno 
   * @param {string|number} numeroPorte 
   */
  constructor(marca, anno, numeroPorte) {
    // super invoca il costruttore della classe padre
    super(marca, anno);

    this.numeroPorte = numeroPorte;
  }

  /**
   * @returns {number}
   */
  get numeroPorte() {
    return this.#numeroPorte;
  }

  /**
   * @returns {"diesel"|"benzina"|"elettrico"}
   */
  get alimentazione() {
    return this.#alimentazione;
  }

  /**
   * @param {number|string} value
   */
  set numeroPorte(value) {
    this.#numeroPorte = +value;
  }

  /**
   * @param {"diesel"|"benzina"|"elettrico"} value
   */
  set alimentazione(value) {
    if (!["diesel", "benzina", "elettrico"].includes(value.toLowerCase())) {
      throw new Error(
        "L'alimentazione deve essere diesel, benzina o elettrico"
      );
    }

    this.#alimentazione = value;
  }

  /**
   * @returns {string}
   */
  informazioni() {
    return `${super.informazioni()}, Porte: ${
      this.#numeroPorte
    }, Alimentazione: ${this.#alimentazione}`;
  }
}

const auto2 = new Automobile("BMW", 2019, 5);

auto2.color = "blu";
auto2.alimentazione = "diesel";
// auto2.numeroPorte = 5;

console.log(auto2.informazioni());

const auto3 = Automobile.creaIstanza("Fiat", 2010);

console.log(Automobile.numIstanze);


function User() {
  let name;

  this.setName = function(value) {
    name = value;
  }

  this.getName = function() {
    return name;
  }
 
}

User.prototype.nuovaFunzione = function() {
   return "ciao";
}

const user = new User(); 

user.nuovaFunzione()

/* const lista = [1, 2, 3];
const lista = new Array(1, 2, 3);
const testo = new String("testo semplice");
const testo = "testo semplice";

lista.map */