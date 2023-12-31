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
            //console.log('km', km, "/",'età', age, '/', 'nome =', id);  
        //IF solo caratterri numerici
        if (isNaN(km) || isNaN(age)) { 
            location.reload();
        } 
        //IF sconto età
        if (age < 18) {
            price -= discountUnder18 * price;
        } else if (age > 65){
            price -= discountOver65 * price;
        }       //console.log('prezzo del biglietto €',price.toFixed(2));
        //CONST per biglietto     
        const boxId = document.querySelector('.box-id');
        boxId.innerHTML = id;
        document.querySelector('.box-nticket').innerHTML = Math.floor(100000000 + Math.random() * 900000000);
        const boxPrice = document.querySelector('.box-price');
        boxPrice.innerHTML = `${price.toFixed(2)} €`;
        //RIMOZIONE DISPLAY-NONE
        const boxTicket = document.getElementById('print-ticket');
        boxTicket.classList.remove('d-none');
    }
);
//CONSOLE LOG
//console.log(button);

