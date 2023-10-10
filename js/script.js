//CONST
const kmPrice = 0.21;
const discountUnder18 = 20/100; //20%
const discountOver65 = 40/100;  //40%
const button = document.querySelector('.btn');

//LET
let km, age, price;
price = kmPrice * km ;

//EVENT LISTERER
button.addEventListener('click', function(){
    km = parseInt(document.getElementById('kmToTravel').value);
    age = parseInt(document.getElementById('passengerAge').value);
    console.log('km',km, "/",'età',age);    
    //IF solo caratterri numerici
    if (isNaN(kmToTravel) || isNaN(passengerAge)) { 
        location.reload();
    } 
    //IF sconto età
    if (age < 18) {
        price -= discountUnder18 * price;
    } else if (age > 65){
        price -= discountOver65 * price;
    } console.log('prezzo del biglietto €',price.toFixed(2)); 
});


//CONSOLE LOG
console.log(button);

