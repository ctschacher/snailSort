// output all elements of a matrix in clockwise spiral order 

function escargot(matrix) {
    // check if input is an array
    if(!Array.isArray(matrix)) 
        throw new Error("Input is not an array");
        
    // check if matrix is mal-formed  
    for (var i = 0; i < matrix.length; i++) {
        if(matrix[i].length !== matrix[0].length) {
            throw new Error("Input error: Each row should contain the same number of elements to form a proper matrix");
        }
    }

    var result = [];
    if (matrix.length === 0 ) return result;

    var yMax = matrix.length - 1; 
    var xMax = matrix[0].length - 1;  // first row defines also the number of elementes for each row
  
    for (var i = 0; i <= xMax; i++) result.push(matrix[0][i]);       // go right   
    if(!yMax) return result;            // stop if no more columns left 
    for (var i = 1; i < yMax; i++)  result.push(matrix[i][xMax]);    // go down 
    for (var i = xMax; i >= 0; i--) result.push(matrix[yMax][i]);    // go left  
    if(!xMax) return result;            // stop if no more rows left
    for (var i = yMax - 1; i > 0; i--) result.push(matrix[i][0]);    // go up
    if(xMax - 1 == 0) return result;

    // create inner matrix
    var subMatrix = [];
    for (var i = 1; i < yMax; i++) subMatrix.push(matrix[i].splice(1, xMax - 1));
    if(subMatrix.length === 1) result.push(subMatrix[0][0]);  // deal with single last element
    else result = result.concat(escargot(subMatrix));         // restart with inner matrix
    return result;
}

exports.escargot = escargot;


// testing is now done with mocha (see test folder: ./test)

