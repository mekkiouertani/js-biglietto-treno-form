//VAR
const kmPrice = 0.21;
const discountUnder18 = 20/100; //20%
const discountOver65 = 40/100;  //40%
const button = document.querySelector('.btn');
let km, age, price, id; //dichiaro le variabili
//EVENT LISTERER
button.addEventListener('click', 
    function(){
        km = parseInt(document.getElementById('kmToTravel').value);
        age = parseInt(document.getElementById('passengerAge').value);
        id = document.getElementById('idPassenger').value;
        price = kmPrice * km ;
        console.log('km', km, "/",'età', age, '/', 'nome =', id);  
        //IF solo caratterri numerici
        if (isNaN(km) || isNaN(age)) { 
            location.reload();
        } 
        //IF sconto età
        if (age < 18) {
            price -= discountUnder18 * price;
        } else if (age > 65){
            price -= discountOver65 * price;
        }   console.log('prezzo del biglietto €',price.toFixed(2));  
    }
);

//CONSOLE LOG
console.log(button);

