/*
Scrivi una Arrow Function che accetti un numero indefinito di argomenti di tipo numerico. 
La funzione dovrà ritornare un oggetto con la somma di tutti i numeri 
e la radice quadrata della somma ottenuta.
*/

const handleNumbers = (...numbers) => {
  console.log(numbers);

  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return {
    somma: sum,
    media: sum / numbers.length,
    radice: Math.sqrt(sum),
  }
};

console.log(handleNumbers(5, 90, 47, 12, 9));
