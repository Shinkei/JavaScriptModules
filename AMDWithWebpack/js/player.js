"use strict";

define([], function() {
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

    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
});
