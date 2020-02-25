# snailSort


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)




<!-- ABOUT THE PROJECT -->
## About The Project
 - output all elements of a matrix in clockwise spiral order
 
 [![SnailSort](https://github.com/ctschacher/snailSort/blob/master/images/snailSort.png)]()
 
 - Result: \[ 1, 2, 3, 6, 9, 8, 7, 4, 5 \]

### Two concepts
In the main directory you can find 2 files which represent two different ways to implement the snailsort algorithm:
- escargot.js
- escargot_1d.js

#### escargot.js
This file takes a 2-dimensional array as input, e.g.
matrix = \[ \[ 1, 2, 3 \], \[ 4, 5, 6 \], \[ 7, 8, 9 \] \];

And it is implemented in a recursive way. So basically, it will first go round (right, down, left, up) to read all outer elements of the matrix and subsequently it will create a sub-matrix which is the same matrix minus the outer ring. This sub-matrix then calls itself recursively to process the new outer ring (of the sub-matrix).

#### escargot_1d.js
The other file processes a 1-dimenstional array, e.g. matrix = \[ 1, 2, 3, 4, 5, 6, 7, 8, 9 \];
This time the transversal of the matrix is realized by using a while loop. 

<!-- GETTING STARTED -->
## Getting Started



### Installation

1. Clone the repo
```sh
git clone https://github.com/ctschacher/snailSort.git
```
2. Install NPM packages
```sh
npm install --save-dev mocha
npm install --save-dev should
```


<!-- USAGE EXAMPLES -->
## Usage
1. Run the test suite
```sh
npm test
```

