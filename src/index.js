import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateAPI from './API-currency-exchange.js';


function getExchangeInfofromResponse(response,dollarAmount) {
  if (response.conversion_rates){
    $('.showConversion').html(response.conversion_rates. + "a dollarAmount);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

// function getExchangeInfofromResponse(response,dollarAmount) {
//   if (response.bikes) {
//     $('.showTitle').html("");
//     for(let i = 0; i < response.bikes.length; i++) { 
//       let a = i+1;
//       $('.showTitle').append("<b>Bike " + a + ferf + ": " + "</b>" + response.bikes[i].title + " was stolen " + "<br>");
//     }
//   } else {
//     $('.showErrors').text(`There was an error: ${response}`);
//   }
// }

async function makeApiCall(dollarAmount) {
  const response = await ExchangeRateAPI.getExchangeRate();
  getExchangeInfofromResponse(response,dollarAmount);
  console.log(response, dollarAmount);
}


$('#go').click(function() {
  let dollarAmount = parseInt($('#dollar-amount').val());
  //let otherCurrency = parseInt($('#currency-type').val());
  makeApiCall(dollarAmount);
});


// Japanese Yen (JPY)
// European Euro (EUR)
// British Pound (GBP)
// Swiss Franc (CHF)
// Canadian Dollar (CAD)