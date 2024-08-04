// Leetcode-867 : Transpose Matrix

var transpose = function(matrix) {
    let transpose = []
    for(let i = 0; i < matrix[0].length; i++){
       transpose[i] = []
       for(let j=0; j< matrix.length; j++){
         transpose[i][j] = matrix[j][i]
       }
    }
    console.log(transpose)
};
transpose([[1,2,3],[4,5,6]])
transpose([[1,2],[3,4],[5,6]])




// Only for Square matrix (Swapping only non-principal diagonal elements)

function TransposeSquareMatrix(matrix){
    let row = matrix.length;
    for(let i = 0; i < row; i++){
        for(let j = i+1; j < row; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    console.log(matrix)
}
TransposeSquareMatrix([[1,2,3],[4,5,6],[7,8,9]])





function TransposeSquareMatrix(matrix){
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}
TransposeSquareMatrix([[1,2,3],[4,5,6],[7,8,9]])
