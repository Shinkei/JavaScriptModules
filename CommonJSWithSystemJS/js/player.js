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
