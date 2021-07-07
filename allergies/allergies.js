export class Allergies {
    constructor(score) {
        Allergies.score = score % 256;
    }

    list() {
        let returnedItems = [];
        if (Allergies.score == 0) return [];
        items.map((item) => {
            if (this.allergicTo(item)) returnedItems.push(item);
        });
        return returnedItems;
    }

    allergicTo(allergicItem) {
        if (!allergicItem) return false;
        if (Allergies.score == 2 ** items.indexOf(allergicItem)) return true;
        if (2 ** items.indexOf(allergicItem) * 2 == 256)
            return (
                Allergies.score -
                    2 ** items.indexOf(allergicItem) -
                    2 ** items.indexOf(allergicItem) / 2 >=
                0
            );
        return (
            Allergies.score -
                2 ** items.indexOf(allergicItem) -
                2 ** items.indexOf(allergicItem) * 2 >=
            0
        );
    }
}

const items = [
    "eggs",
    "peanuts",
    "shellfish",
    "strawberries",
    "tomatoes",
    "chocolate",
    "pollen",
    "cats",
];

/* 

input -> 3

3 - 2**items.indexOf() // nah its broken, need to rethink 

const allergies = new Allergies(1);

console.log(allergies.allergicTo('cats'))

*/
