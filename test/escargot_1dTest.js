const should = require('should');
const matrix = require('../escargot_1d_input3.js');

var displayMatrix = function(array, width) {
    console.log(`\n\tInput array (displayed as matrix with ${width} elements per row):`);
    for(var i = 0; i < array.length; i++) {
        process.stdout.write(`\t${array[i]}`);
        if((i+1) % width == 0) console.log();
    }
}

describe('\n\nCheck 1d-array implementation of escargot algorithm:', function() {
    var sampleMatrix1 = [
        1,  2,  3,  4,
        5,  6,  7,  8, 
        9, 10, 11, 12,
        13, 14, 15, 16
    ];
    it('should return an array for a well-formed 2x2 squared matrix', function() {
        displayMatrix(sampleMatrix1, 4);
        var resultArray = matrix.escargot(sampleMatrix1, 4);
        process.stdout.write("\tOutput: " );
        console.log(resultArray);
        should(resultArray).eql([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
    });

    it('should return an array for a single-row matrix', function() {
        displayMatrix(sampleMatrix1, 16);
        var resultArray = matrix.escargot(sampleMatrix1, 16);
        process.stdout.write("\tOutput: " );
        console.log(resultArray);
        should(resultArray).eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    });

    it('should return an array for a single-column matrix', function() {
        displayMatrix(sampleMatrix1, 1);
        var resultArray = matrix.escargot(sampleMatrix1, 1);
        process.stdout.write("\tOutput: " );
        console.log(resultArray);
        should(resultArray).eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });

    it('should return with error due to mal-formed matrix', function() {
        displayMatrix(sampleMatrix1, 3);
        try {
            var resultArray = matrix.escargot(sampleMatrix1, 3);
            console.log('\n\tOutput: ' + resultArray);   // in case of thrown error this line is not executed
        } catch (error) {
            console.log('\n\tOutput: ' + error);
        }
        should(function() {matrix.escargot(sampleMatrix1, 3)}).throw("Input array doesn't form a complete matrix with a width of " + 3);
    });

    var sampleMatrix2 = [];
    it('should return an empty array', function() {
        displayMatrix(sampleMatrix2);
        var resultArray = matrix.escargot(sampleMatrix2, 1);
        process.stdout.write("\tOutput: " );
        console.log(resultArray);
        should(resultArray).eql([]);
    });

    var sampleMatrix3 = [ 1 ];
    it('should return an array with a single element', function() {
        displayMatrix(sampleMatrix3);
        var resultArray = matrix.escargot(sampleMatrix3, 1);
        process.stdout.write("\tOutput: " );
        console.log(resultArray);
        should(resultArray).eql([ 1 ]);
    });

    it('should return an error that it cannot form a complete matrix with a width of 3 elements', function() {
        displayMatrix(sampleMatrix3, 3);
        try {
            var resultArray = matrix.escargot(sampleMatrix3, 3);
            console.log('\n\tOutput: ' + resultArray);   // in case of thrown error this line is not executed
        } catch (error) {
            console.log('\n\tOutput: ' + error);
        }
        should(function() {matrix.escargot(sampleMatrix3, 3)}).throw("Input array doesn't form a complete matrix with a width of " + 3);
    });

    
    // special characters
    // non-array
    // array with 0,1 element
    // multi-dim array

});



// var sampleMatrix1 = [
//     1,  2,  3,  4,
//     5,  6,  7,  8, 
//     9, 10, 11, 12,
//    13, 14, 15, 16
// ];

// var sampleMatrix2 = [
//     1,  2,  3,  4,  5,
//     6,  7,  8,  9, 10, 
//    11, 12, 13, 14, 15,
//    16, 17, 18, 19, 20,
//    21, 22, 23, 24, 25
// ];

// var sampleMatrix3 = [
//     1,  2,  3,  4,  5,  6, 107,
//     7,  8,  9, 10, 11, 12, 108,
//    13, 14, 15, 16, 17, 18, 109,
//    19, 20, 21, 22, 23, 24, 110,
//    25, 26, 27, 28, 29, 30, 111,
//    31, 32, 33, 34, 35, 36, 112
// ];      

// var sampleMatrix4 = [
//     1,  2,  3,  4,  5,  6,  7,  8,
//     9, 10, 11, 12, 13, 14, 15, 16,
//    17, 18, 19, 20, 21, 22, 23, 24, 
//    25, 26, 27, 28, 29, 30, 31, 32,
//    33, 34, 35, 36, 37, 38, 39, 40,
//    41, 42, 43, 44, 45, 46, 47, 48
// ];
