class Matrix {
  private p_columns: number[][];
  private p_rows: number[][];

  get columns() {
    return this.p_columns;
  }

  get rows() {
    // return this.p_rows;
    return [];
  }

  constructor(matrixNumbers: string) {
    const matrix = matrixNumbers
      .split("\n")
      .map((x) => x.split(" ").map((x) => Number(x)));
    // console.log(matrix);
    this.p_columns = matrix;
    this.p_rows = this.getRows(matrix);
  }

  private getRows(matrix: number[][]) {
    let rowCount = 0;

    for (const column in matrix) {
      console.log("Column: ", column);
    }

    return [[]]
  }
}

export default Matrix;
