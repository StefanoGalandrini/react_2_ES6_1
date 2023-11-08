/*
Scrivi una Arrow Function che accetti un oggetto come argomento,
il quale avrà al suo interno la proprietà name ed age e tramite destructuring, 
concatenare queste due proprietà in una stringa: L’utente ${name} ha ${age} anni.
*/

const user = {
  name: "Mario",
  age: 50,
  address: "Via Roma 1",
  city: "Roma",
  country: "Italia",
};

/**
 * @param {*} currentUser
 * @returns {void} Ritorna nulla, quindi undefined
 */
const printUser = (currentUser) => {
  const { name, age } = currentUser;

  // console.log(`L'utente ${currentUser.name} ha ${currentUser.age} anni.`);
  console.log(`L'utente ${name} ha ${age} anni.`);
};

/**
 * @param {*} currentUser
 * @returns {void} Ritorna nulla, quindi undefined
 */
const printUser2 = ({ name, age }) => {
  console.log(`L'utente ${name} ha ${age} anni.`);
};

printUser(user);

/*
Dato un oggetto complesso, composto da array e oggetti,
creare una funzione che restituisca un nuovo oggetto con i valori: model, city, registration.city, owners[0] e owners[1].
Aggiungere una proprietà text dove creare la stringa "L'auto Mustang è stata acquistata prima da Mario Rossi e poi da Giuseppe Verdi a Milano".
*/
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  owners: ["Mario Rossi", "Giuseppe Verdi", "Giulia Bianchi", "Anna Neri"],
  registration: {
    city: "Milano",
    state: "Milano",
    country: "ITALY",
  },
};

const printVehicle = (vehicle) => {
  const { model, owners: [firstOwner, , thirdOwner], registration: {city} } = vehicle;
  // const model = vehicle.model;
  // const firstOwner = vehicle.owners[0];
  // const thirdOwner = vehicle.owners[2];
  // const city = vehicle.registration.city;

  // console.log(`L'auto ${vehicle.model} è stata acquistata prima da ${vehicle.owners[0]} e poi da ${vehicle.owners[1]} a ${vehicle.registration.city}`)
  console.log(
    `L'auto ${model} è stata acquistata prima da ${firstOwner} e poi da ${thirdOwner} a ${city}`
  );
};

printVehicle(vehicleOne);
