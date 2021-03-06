"use strict";

var player = require('./player.js');
var game = require('./game.js');

console.log("Bundled with Browserify!!");

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function(){
    player.setName(document.getElementById('playername').value);
    game.printGame();
});

// add clickhandler to the calculate score buton
document.getElementById('calculate').addEventListener('click', function(){
    game.calculateScore();
})

//  setthe default number of problems
document.getElementById('problemCount').value = game.getProblemCount();
