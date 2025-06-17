// console.log('Main.js загружен');
window.addEventListener('DOMContentLoaded', function () {
    const tabs = require('./modules/tabs');
    const modal = require('./modules/modal');
    const cards = require('./modules/cards');
    const calculator = require('./modules/calculator');
    const forms = require('./modules/forms');
    const timer = require('./modules/timer');
    const slider = require('./modules/slider');

    tabs();
    modal();
    cards();
    calculator();
    forms();
    timer();
    slider();
});

