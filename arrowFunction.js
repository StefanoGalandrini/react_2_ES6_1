/*
Creare una funzione che, data una stringa, 
conti le vocali al suo interno e ne ritorni il numero.
*/

/**
 * @param {string} testo
 * @returns {number}
 */
const contaVocali = (testo) => {
  const vocali = ["a", "e", "i", "o", "u"];
  let numeroVocali = 0;

  // ciclo su ogni lettera del testo e controllo se è una vocale
  for (let i = 0; i < testo.length; i++) {
    // converto il singolo carattere in lowerCase 
    // per evitare problemi di case sensitiveness
    const singoloCarattere = testo[i].toLowerCase();

    if (vocali.includes(singoloCarattere)) {
      numeroVocali++;
    }
  }

  return numeroVocali;
};

console.log(contaVocali("testo"));
