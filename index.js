function shout(string) {
    //todo
    return string.toUpperCase();
};

function whisper(string) {
    return string.toLowerCase();
};

function logShout(string) {
    console.log(string.toUpperCase());
    return;
};

function logWhisper(string) {
    console.log(string.toLowerCase());
    return;
};


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else {
        return "YES INDEED!"
    };
};

console.log("You're Amazing!");

//---------------Examples----------------------------------->
/**/
function isays(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }

  "Hello!".toUpperCase(); // 'HELLO!'