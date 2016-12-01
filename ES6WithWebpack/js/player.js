"use strict";

// private members
var playerName = '';

export function logPlayer(){
    console.log('The current player is ' + playerName + '.');
};

export default function setName(name) {
    playerName = name;
}

export function getName() {
    return playerName;
}
