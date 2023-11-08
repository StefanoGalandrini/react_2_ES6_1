function sommaNumeri(num1, num2){
  console.log(this);

  return num1 + num2;
}

const sommaNumeri2 = (num1, num2) => {
  console.log(this);

  return num1 + num2;
}

const math = {
  chiave1: "valore1",
  chiave2: "valore2",
  sommaNumeri: sommaNumeri,
  sommaNumeri2: sommaNumeri2,
  sommaNumeri3: (num1, num2) => {
    console.log(this);
  
    return num1 + num2;
  },

}

math.sommaNumeri(1, 2); // 3
math.sommaNumeri2(1, 2); // 3
math.sommaNumeri3(1, 2); // 3
// sommaNumeri(1, 2); // 3
sommaNumeri2(1, 2); // 3
