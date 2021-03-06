(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./game.js":2,"./player.js":3}],2:[function(require,module,exports){
"use strict";

var player = require('./player.js');
var scoreboard = require('./scoreboard.js');

// private members
var factorElement = document.getElementById('factor');
var problemsPerGame = 3;

function printGame() {
    
    player.logPlayer();

    // determine the number of problems to show
    setProblemCount(document.getElementById('problemCount').value);

    // create the html for the current game
    var gameForm = '';
    for (var i = 1; i <= problemsPerGame; i++) {
       gameForm += '<div class="form-group">';
       gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
       gameForm += factorElement.value + ' x ' + i + ' = </label>';
       gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
       gameForm += '</div>';
    }

    // add the new game to the page
    var gameElement = document.getElementById('game');
    gameElement.innerHTML = gameForm;

    // enable the calculate score button
    document.getElementById('calculate').removeAttribute('disabled');
}

function calculateScore() {
    
    var problemsInGame = getProblemCount();
    var score = 0;

    // loop through the text boxes and calculate the number that are correct
    for (var i = 1; i <= problemsInGame; i++) {
        var answer = document.getElementById('answer' + i).value;
        if(i * factorElement.value == answer){
            score++;
        }
    }

    // create a new result object to pass to the scoreboard
    var result = {
        name: player.getName(),
        score: score,
        problems: problemsInGame,
        factor: factorElement.value
    };

    // add the result and update the scoreboard
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    // disable the calculate score button
    document.getElementById('calculate').setAttribute('disabled', 'true');
}

function setProblemCount(newProblemCount) {
    problemsPerGame = newProblemCount;
}

function getProblemCount() {
    return problemsPerGame;
}

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;




},{"./player.js":3,"./scoreboard.js":4}],3:[function(require,module,exports){
"use strict";

// private members
var playerName = '';

function logPlayer(){
    console.log('The current player is ' + playerName + '.');
};

function setName(name) {
    playerName = name;
}

function getName() {
    return playerName;
}

exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;

},{}],4:[function(require,module,exports){
"use strict";

console.log('Creating a scoreboard...');

// private memebers
var results = []; // array to store result of every game

function addResult(newResult) {
    results.push(newResult);
}

function updateScoreboard() {
    var output = '<h2>Scoreboard</h2>';

    // lop over all results and create the html for the scoreboard
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        output += '<h4>';
        output += result.name + ': ' + result.score + '/' + result.problems + 'for factor ' + result.factor;
        output += '</h4>';
    }

    // add the update scoreboard to the page
    var scoresElement = document.getElementById('scores');
    scoresElement.innerHTML = output;
}

exports.addResult = addResult;
exports.updateScoreboard = updateScoreboard;
},{}]},{},[1]);
