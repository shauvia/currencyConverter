const baseURL = 'https://api.exchangeratesapi.io/latest?base=';
const convertTo = '&symbols=';

// https://api.exchangeratesapi.io/latest?base=USD

async function getData(baseURL, baseCurr, convertTo , ConvertingCurr){
  console.log('adress:', baseURL+baseCurr+convertTo+ConvertingCurr )
  let response = await fetch(baseURL+baseCurr+convertTo+ConvertingCurr);
  let data = await response.json();
  console.log('data:', data);
  return data;
}

function calculateTheMoney(num1, num2){
  return num1 * num2;
}

function displayConvertedMoney(num){
  let mon = document.getElementById('outputDiv').value = num;
  console.log(1);
}

async function performAction(event){
  let baseCurr = document.getElementById('currency-select').value;
  let baseNum = parseInt(document.getElementById('beforeConverting').value);
  console.log(' baseNum',  baseNum)
  let ConvertingCurr = document.getElementById('currConverted-select').value;
  let  outsideData = await getData(baseURL, baseCurr, convertTo, ConvertingCurr);
  console.log('outsideData', outsideData)
  let calcMoney = calculateTheMoney(baseNum, outsideData.rates[ConvertingCurr]);
  // data.rates['PLN']
  console.log('calcMoney', calcMoney)
  displayConvertedMoney(Math.round(calcMoney));
}

document.getElementById('generate').addEventListener('click', performAction);
