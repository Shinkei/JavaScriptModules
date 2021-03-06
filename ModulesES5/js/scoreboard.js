"use strict";
// Implementation of a module using the REVEALING MODULE PATTERN, using the constructor version

var Scoreboard = function() {
    
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

    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }
};