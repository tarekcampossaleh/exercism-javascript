export const score = (wordString) => {
    if (!wordString) return 0;

    let count = 0;
    const word = wordString.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        for (const [key, value] of Object.entries(lettersValue)) {
            for (let a = 0; a < value.length; a++) {
                if (value[a] === word[i]) count += Number(key);
            }
        }
    }

    return count;
};

const lettersValue = {
    1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
    2: ["d", "g"],
    3: ["b", "c", "m", "p"],
    4: ["f", "h", "v", "w", "y"],
    5: ["k"],
    8: ["j", "x"],
    10: ["q", "z"],
};
