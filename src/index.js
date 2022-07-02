import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateAPI from 'src\API-currency-exchange.js';


function getExchangeInfofromResponse(response,dollarAmount) {
  if (response.bikes) {
    $('.showTitle').html("");
    for(let i = 0; i < response.bikes.length; i++) { 
      let a = i+1;
      $('.showTitle').append("<b>Bike " + a + ": " + "</b>" + response.bikes[i].title + " was stolen " + convertToHumanTime(response.bikes[i].date_stolen) + "<br>");
    }
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(dollarAmount) {
  const response = await ExchangeRateAPI.getExchangeRate();
  getExchangeInfofromResponse(response,dollarAmount);
  console.log(response);
}

$(document).ready(function() {
  $('#go').click(function() {
    let dollarAmount = parseInt($('#dollar-amount').val());
    makeApiCall(dollarAmount);
  });
});