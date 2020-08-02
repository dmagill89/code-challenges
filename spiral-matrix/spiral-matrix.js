/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = [];

  if (matrix.length === 0) {
    return res;
  }

  let rowBegin = 0
  let rowMax = matrix.length - 1;
  let colBegin = 0;
  let colMax = matrix[0].length - 1;

  while (rowBegin <= rowMax && colBegin <= colMax) {

    for (let i = colBegin; i <= colMax; i++) {
      res.push(matrix[rowBegin][i]);
    }

    rowBegin++;

    for (let i = rowBegin; i <= rowMax; i++) {
      res.push(matrix[i][colMax]);
    }

    colMax--;

    if (rowBegin <= rowMax) {
      for (let i = colMax; i >= colBegin; i--) {
        res.push(matrix[rowMax][i]);
      }
    }

    rowMax--;

    if (colBegin <= colMax) {
      for (let i = rowMax; i >= rowBegin; i--) {
        res.push(matrix[i][colBegin]);
      }
    }

    colBegin++;
  }

  return res;
};