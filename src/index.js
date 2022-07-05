import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateAPI from './API-currency-exchange.js';

function getExchangeInfofromResponse(response,dollarAmount,otherCurrency) {
  if (response.conversion_rates){
    if(otherCurrency === "JPY"){
      $('.showConversion').html("$1.00 U.S Dollar (USD) = " + "¥" + response.conversion_rates.JPY + " Japanese Yen (JPY)" + "</br>" + "$" + dollarAmount + " U.S Dollars (USD) = " + "¥" + response.conversion_rates.JPY * dollarAmount + " Japanese Yen (JPY)");
    } else if(otherCurrency === "EUR"){
      $('.showConversion').html("$1.00 U.S Dollar (USD) = " + "€" + response.conversion_rates.EUR + " European Euros (EUR)" + "</br>" + "$" + dollarAmount + " U.S Dollars (USD) = " + "€" + response.conversion_rates.EUR * dollarAmount + " European Euros (EUR)");
    } else if(otherCurrency === "GBP"){
      $('.showConversion').html("$1.00 U.S Dollar (USD) = " + "£" + response.conversion_rates.GBP + " British Pounds (GBP)" + "</br>" + "$" + dollarAmount + " U.S Dollars (USD) = " + "£" + response.conversion_rates.GBP * dollarAmount + " British Pounds (GBP)");
    } else if(otherCurrency === "CHF"){
      $('.showConversion').html("$1.00 U.S Dollar (USD) = " + "₣" + response.conversion_rates.CHF + " Swiss Francs (CHF)" + "</br>" + "$" + dollarAmount + " U.S Dollars (USD) = " + "₣" + response.conversion_rates.CHF * dollarAmount + " Swiss Francs (CHF)");
    } else if(otherCurrency === "CAD"){
      $('.showConversion').html("$1.00 U.S Dollar (USD) = " + "$" + response.conversion_rates.CAD + " Canadian Dollars (CAD)" + "</br>" + "$" + dollarAmount + " U.S Dollars (USD) = " + "$" + response.conversion_rates.CAD * dollarAmount + " Canadian Dollars (CAD)");
    } else {
      $('.showConversion').html("the currency in question doesn't exist");
    }
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(dollarAmount, otherCurrency) {
  const response = await ExchangeRateAPI.getExchangeRate();
  getExchangeInfofromResponse(response,dollarAmount,otherCurrency);
}


$('#go').click(function() {
  let dollarAmount = parseInt($('#dollar-amount').val());
  let otherCurrency = $('#currency-type').val();
  makeApiCall(dollarAmount,otherCurrency);
});