"use strict";

var _player = require('./player.js');

var _player2 = _interopRequireDefault(_player);

var _game = require('./game.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Loaging with ES6!!");

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    (0, _player2.default)(document.getElementById('playername').value);
    (0, _game.printGame)();
});

// add clickhandler to the calculate score buton
document.getElementById('calculate').addEventListener('click', function () {
    (0, _game.calculateScore)();
});

//  setthe default number of problems
document.getElementById('problemCount').value = (0, _game.getProblemCount)();