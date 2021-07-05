const score = (word) => {
    const scoreCount = 0;

    [...word].map((words) => {
      console.log(words);
      Object.keys(lettersValue).map((key, index) => {
            if (lettersValue[index] == words) console.log(`${index}+${words}+${key}`); scoreCount + key;
        });
    });

    console.log(scoreCount)
    return scoreCount;
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


score("word")