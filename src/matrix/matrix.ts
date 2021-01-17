class Matrix {
  columns: number[][];
  rows: number[][];

  constructor(matrixNumbers: string) {
    this.rows = matrixNumbers
      .split("\n")
      .map((x) => x.split(" ").map((x) => Number(x)));

    this.columns = [];

    for (let i = 0; i < this.rows.length; i++) {
      this.columns.push(this.rows.map((row) => row[i]));
    }
  }
}

export default Matrix;
