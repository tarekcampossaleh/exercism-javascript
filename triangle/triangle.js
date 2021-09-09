export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  get isEquilateral() {
    return this.sides[0] === this.sides[1] && this.sides[1] == this.sides[2] && this.sides[0] != 0
  }

  get isIsosceles() {
    throw new Error("Remove this statement and implement this function");
  }

  get isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
