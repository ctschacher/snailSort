// output all elements of a square matrix in clockwise spiral order 

function escargot(orgMatrix, element) { 
    // check if input is an array
    if(!Array.isArray(orgMatrix)) 
        throw new Error("Input is not an array");

    if (orgMatrix.length === 0 ) return [];

    if (orgMatrix.length % element !== 0) throw new Error("Input array doesn't form a complete matrix with a width of " + element);         // skip edge length that is not a divisor of total number of elements
    var matrix = orgMatrix.slice();                         // copy matrix
    var result = [];
    var rowSize = element;
    var columnSize = orgMatrix.length / rowSize;
    
    while(matrix.length > 0) {
        for(var i = 0; i < rowSize; i++) result.push(matrix.shift());                                   // go right
        if(!matrix.length) return result;   // matrix.length == 0
        for(var i = 1; i < columnSize - 1; i++) result.push(matrix.splice((i * rowSize) - i, 1)[0]);    // go down
        for(var i = 0; i < rowSize; i++) result.push(matrix.pop());                                     // go left
        if(!matrix.length) return result;
        for(var i = columnSize - 3; i >= 0; i--) result.push(matrix.splice(i * (rowSize-1), 1)[0]);     // go up
        rowSize-=2; 
        columnSize-=2; 
    }
    return result;
}

exports.escargot = escargot;

// tests for escargot function are performed using test/escargot_1dTest.js (covered by 'npm test' from command-line)