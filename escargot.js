// output all elements of a matrix in clockwise spiral order 

function escargot(matrix) {

    // check if matrix is mal-formed  
    for (var i = 0; i < matrix.length; i++) {
        if(matrix[i].length !== matrix[0].length) {
            // console.log(matrix);
            throw new Error("Input error: Each row should contain the same number of elements to form a proper matrix");
            // console.log("Input error: Each row should contain the same number of elements to form a proper matrix");
            // process.exit(1); 
        }
    }

    var result = [];
    if (matrix.length === 0 ) return result;

    var yMax = matrix.length - 1; 
    var xMax = matrix[0].length - 1;  // first row defines also the number of elementes for each row

    // console.log("(Sub-)Matrix: ");
    // matrix.map((row)=> {console.log(row.join("\t"))}).join("\n");
    // console.log();

  
    for (var i = 0; i <= xMax; i++) result.push(matrix[0][i]);       // go right   
    if(!yMax) return result;     // check if already finished (zero means false)
    for (var i = 1; i < yMax; i++)  result.push(matrix[i][xMax]);    // go down 
    for (var i = xMax; i >= 0; i--) result.push(matrix[yMax][i]);    // go left  
    if(!xMax) return result; 
    for (var i = yMax - 1; i > 0; i--) result.push(matrix[i][0]);    // go up


    // create inner matrix
    subMatrix = [];
    for (var i = 1; i < yMax; i++) subMatrix.push(matrix[i].splice(1, xMax - 1));

    if(subMatrix.length === 1) result.push(subMatrix[0][0]);  // deal with single last element
    else result = result.concat(escargot(subMatrix));         // restart with inner matrix
    return result;
}

exports.escargot = escargot;

// var sampleMatrix4 = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25]
// ];


// testing is now done with mocha
// escargot(sampleMatrixD).map((i) => process.stdout.write(`${i}, `));
// console.log();

