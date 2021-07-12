export const isPangram = (sentence) => {
    const sentenceLowerCase = sentence.toLowerCase();
    return alphabet.every((letter) => sentenceLowerCase.includes(letter));
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
