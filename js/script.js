const KmPrice = 0.21;
const discountUnder18 = 20/100; //20%
const discountOver65 = 40/100;  //40%
let km, age, price;
km = parseInt(prompt('Quanti km vuole percorrere?'));
age = parseInt(prompt('Qual è la sua età?'));
price = KmPrice * km ; 
console.log('km',km, "/",'età',age);
if (isNaN(km) || isNaN(age)) { 
    location.reload();
}

if (age < 18) {
    price -= discountUnder18 * price;
} else if (age > 65){
    price -= discountOver65 * price;
}
console.log('prezzo del biglietto €',price);