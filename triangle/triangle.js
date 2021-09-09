export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  get isInequality() {
    this.sides.sort();
    if (this.sides[2] > this.sides[0] + this.sides[1]) return false;
    return true;
  }

  get isEquilateral() {
    this.sides.sort()
    if (this.sides[2] > this.sides[0] + this.sides[1]) return false;
    return (
      this.sides[0] === this.sides[1] &&
      this.sides[1] == this.sides[2] &&
      this.sides[0] != 0
    );
  }

  get isIsosceles() {
    this.sides.sort()
    if (this.sides[2] > this.sides[0] + this.sides[1]) return false;
    return (
      this.sides[0] == this.sides[1] ||
      this.sides[0] == this.sides[2] ||
      this.sides[1] == this.sides[2]
    );
  }

  get isScalene() {
    this.sides.sort()
    if (this.sides[2] > this.sides[0] + this.sides[1]) return false;
    return (
      this.sides[0] != this.sides[1] &&
      this.sides[0] != this.sides[2] &&
      this.sides[1] != this.sides[2]
    );
  }
}
