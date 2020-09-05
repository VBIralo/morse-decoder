const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

let MORSE = {};

function decode(expr) {
    let text = '';

    Object.keys(MORSE_TABLE).forEach(function (key) {
        let w = key.replace(/\./g, 10).replace(/\-/g, 11);

        for (var i = w.length; i < 10; i++) {
            w = '0' + w
        };

        MORSE[w] = MORSE_TABLE[key];
    });

    expr.match(/.{10}/g).map(mrs => {
        text += MORSE[mrs]
    })

    return text;
};

module.exports = {
    decode
}