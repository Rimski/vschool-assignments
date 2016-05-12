var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin", "whilen", "livin", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Got", "kiss", "myself", "Im", "so", "pretty"];

function playSong() {
    return lyrics.join(" ");
}

function playBackwards() {
    return lyrics.reverse().join(" ")
}

function everyOtherWord() {
    var everyOtherLyric = "";
    for (var i = 0; i < lyrics.length; i += 2) {
        everyOtherLyric += lyrics[i];
    }
    return everyOtherLyric;
}
console.log(everyOtherWord());