const should = require('should');
const matrix = require('../escargot.js');

var displayMatrix = function(matrix) {
    if(!Array.isArray(matrix)) console.log('\n\tInput: "' + matrix + '"');
    else {
        console.log("\n\tInput: ");
        matrix.map((row)=> {
            process.stdout.write('\t');
            console.log(row);
        });
    }
    // matrix.map((row)=> {console.log('\t[ ' + row.join(",\t") + ' ],')}).join("\n");
    process.stdout.write('\tOutput: ');
}

describe('Check 2d-array implementation of escargot algorithm:', function() {
    var sampleMatrix1 = [
        [1,  2],
        [7,  8]
    ]; 
    it('should return an array for a well-formed 2x2 squared matrix', function() {
        displayMatrix(sampleMatrix1);
        var resultArray = matrix.escargot(sampleMatrix1);
        console.log(resultArray);
        should(resultArray).eql([1, 2, 8, 7]);
    });

    var sampleMatrix2 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8], 
        [9, 10, 11, 12],
        [13, 14, 15, 16] 
    ];
    it('should return an array for a well-formed 4x4 squared matrix', function() {
        displayMatrix(sampleMatrix2);
        var resultArray = matrix.escargot(sampleMatrix2);
        console.log(resultArray);
        should(resultArray).eql([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    });

    var sampleMatrix3 = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15, 16]
    ];
    it('should return an array for a well-formed, non-squared matrix', function() {
        displayMatrix(sampleMatrix3);
        var resultArray = matrix.escargot(sampleMatrix3);
        console.log(resultArray);
        should(resultArray).eql([1, 2, 3, 4, 5, 6, 7, 8, 16, 15, 14, 13, 12, 11, 10, 9]);
    });

    var sampleMatrix4 = [
        [1]
    ]; 
    it('should return an array with single element for a single-element matrix', function() {
        displayMatrix(sampleMatrix4);
        var resultArray = matrix.escargot(sampleMatrix4);
        console.log(resultArray);
        should(resultArray).eql([1]);
    });

    var sampleMatrix5 = [
        [1,  2,  3,  4,  5,  6, 107]
    ]; 
    it('should return an array for a single-line (one row) matrix', function() {
        displayMatrix(sampleMatrix5);
        var resultArray = matrix.escargot(sampleMatrix5);
        console.log(resultArray);
        should(resultArray).eql([1,  2,  3,  4,  5,  6, 107]);
    });

    var sampleMatrix6 = [
        [1],
        [7],
        [13],
        [19],
        [25],
        [31]
    ]; 
    it('should return an array for a matrix with 1 column', function() {
        displayMatrix(sampleMatrix6);
        var resultArray = matrix.escargot(sampleMatrix6);
        console.log(resultArray);
        should(resultArray).eql([1, 7, 13, 19, 25, 31]);
    });


    var sampleMatrix6b = [
        [1, 2], 
        [7, 8],
        [13, 14],
        [19, 20],
        [25, 26],
        [31, 32]
    ]; 
    it('should return an array for a matrix with 2 columns', function() {
        displayMatrix(sampleMatrix6b);
        var resultArray = matrix.escargot(sampleMatrix6b);
        console.log(resultArray);
        should(resultArray).eql([1, 2, 8 , 14, 20, 26, 32, 31, 25, 19, 13, 7]);
    });

    var sampleMatrix6c = [
        [1, 2, 3], 
        [7, 8, 9],
        [13, 14, 15],
        [19, 20, 21],
        [25, 26, 27],
        [31, 32, 33]
    ]; 
    it('should return an array for a matrix with 3 columns', function() {
        displayMatrix(sampleMatrix6c);
        var resultArray = matrix.escargot(sampleMatrix6c);
        console.log(resultArray);
        should(resultArray).eql([1, 2, 3, 9, 15, 21, 27, 33, 32, 31, 25, 19, 13, 7, 8, 14, 20, 26]);
    });

    var sampleMatrix7 = [
        ['c']
    ]; 
    it('should return an array with single element (character) for a single-element matrix', function() {
        displayMatrix(sampleMatrix7);
        var resultArray = matrix.escargot(sampleMatrix7);
        console.log(resultArray);
        should(resultArray).eql(['c']);
    });

    var sampleMatrix8 = []; 
    it('should return an empty array if input array is empty', function() {
        displayMatrix(sampleMatrix8);
        var resultArray = matrix.escargot(sampleMatrix8);
        console.log(resultArray);
        should(resultArray).eql([]);
    });



    var sampleMatrix9 = [
        ['c'],
        []
    ]; 
    it('should return an error due to mal-formed input matrix (missing column element)', function() {
        displayMatrix(sampleMatrix9);
        should(function () {matrix.escargot(sampleMatrix9)}).throw('Input error: Each row should contain the same number of elements to form a proper matrix');
        console.log('ERROR');
    });


    var sampleMatrixA = [
        [1],
        [7,  8]
    ];
    it('should return an error due to mal-formed input matrix (missing first row element)', function() {
        displayMatrix(sampleMatrixA);
        should(function () {matrix.escargot(sampleMatrixA)}).throw('Input error: Each row should contain the same number of elements to form a proper matrix');
        console.log('ERROR');
    });


    var sampleMatrixB = [
        [1,  2],
        [7]
    ]; 
    it('should return an error due to mal-formed input matrix (missing second row element)', function() {
        displayMatrix(sampleMatrixB);    
        should(function () {matrix.escargot(sampleMatrixB)}).throw('Input error: Each row should contain the same number of elements to form a proper matrix');
        console.log('ERROR');
    });

    var sampleMatrixC = [
        [ , 2],
        [7]
    ]; 
    it('should return an error due to mal-formed input matrix', function() {
        displayMatrix(sampleMatrixC);    
        should(function () {matrix.escargot(sampleMatrixC)}).throw('Input error: Each row should contain the same number of elements to form a proper matrix');
        console.log('ERROR');
    });

    var noMatrix = 'noMatrix'; 
    it('should return an error when input is not an array', function() {
        displayMatrix(noMatrix);    
        should(function () {matrix.escargot(noMatrix)}).throw('Input is not an array');
        console.log('ERROR');
    });

  });

