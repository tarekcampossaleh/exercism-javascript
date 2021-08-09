export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    let rows = this.matrix.split("\n");
    return rows.map((r) => r.split(" ").map((n) => +n));
  }

  get columns() {
    let result = [];

    for (let i = 0; i <= this.rows.length; i++) {
      result[i] = this.rows.map((r) => r[i]);
    }

    return result;
  }
}