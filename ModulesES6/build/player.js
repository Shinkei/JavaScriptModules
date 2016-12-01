"use strict";

// private members

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logPlayer = logPlayer;
exports.default = setName;
exports.getName = getName;
var playerName = '';

function logPlayer() {
    console.log('The current player is ' + playerName + '.');
};

function setName(name) {
    playerName = name;
}

function getName() {
    return playerName;
}