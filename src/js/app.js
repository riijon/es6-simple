import $ from 'jquery';
import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';
import promiseWorkflow from './modules/promise-workflow';
import chain from './modules/chain';
import promiseAll from './modules/promise-all';
import hoge from './modules/hoge';

const item1Price = 400;
const item2Price = 600;
const totalPrice = additionCalculator(item1Price, item2Price);
const tax = 1.08;
const priceIncludeTax = taxCalculator(totalPrice, tax);
// promiseWorkflow();
// chain();
// promiseAll();
const Hoge = new hoge();

// console.log(priceIncludeTax);
$('.result').html(priceIncludeTax);
