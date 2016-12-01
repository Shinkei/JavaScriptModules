"use strict";

import assignPlayerName from './player.js';
import {printGame, calculateScore, getProblemCount} from './game.js';

console.log("Build with Webpack and babel-loader");

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function(){
    assignPlayerName(document.getElementById('playername').value);
    printGame();
});

// add clickhandler to the calculate score buton
document.getElementById('calculate').addEventListener('click', function(){
    calculateScore();
})

//  setthe default number of problems
document.getElementById('problemCount').value = getProblemCount();
