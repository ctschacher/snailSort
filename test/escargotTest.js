const should = require('should');
const matrix = require('../escargot.js');

displayMatrix = function(matrix) {
    console.log("\n\tInput: ");
    matrix.map((row)=> {
        process.stdout.write('\t');
        console.log(row);
    });
    // matrix.map((row)=> {console.log('\t[ ' + row.join(",\t") + ' ],')}).join("\n");
    process.stdout.write('\tOutput: ');
}

describe('Check implementation of escargot algorithm:', function() {
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


    sampleMatrix3 = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15, 16]
    ];
    it('should return an array for a well-formed, non-squared matrix', function() {
        displayMatrix(sampleMatrix3);
        var resultArray = matrix.escargot(sampleMatrix3);
        console.log(resultArray);
        should(resultArray).eql([1, 2, 3, 4, 5, 6, 7, 8, 16, 15, 14, 13, 12, 11, 10, 9]);
    });

    sampleMatrix4 = [
        [1]
    ]; 
    it('should return an array with single element for a single-element matrix', function() {
        displayMatrix(sampleMatrix4);
        var resultArray = matrix.escargot(sampleMatrix4);
        console.log(resultArray);
        should(resultArray).eql([1]);
    });

    sampleMatrix5 = [
        [1,  2,  3,  4,  5,  6, 107]
    ]; 
    it('should return an array for a single-line (one row) matrix', function() {
        displayMatrix(sampleMatrix5);
        var resultArray = matrix.escargot(sampleMatrix5);
        console.log(resultArray);
        should(resultArray).eql([1,  2,  3,  4,  5,  6, 107]);
    });

    sampleMatrix6 = [
        [1],
        [7],
        [13],
        [19],
        [25],
        [31]
    ]; 
    it('should return an array for a single-line (one column) matrix', function() {
        displayMatrix(sampleMatrix6);
        var resultArray = matrix.escargot(sampleMatrix6);
        console.log(resultArray);
        should(resultArray).eql([1, 7, 13, 19, 25, 31]);
    });


    sampleMatrix7 = [
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

  });

