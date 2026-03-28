// assignment-3a-patterns.js

// Create functions that generate different patterns

// Function 1: Right Triangle
function rightTriangle(rows) {
    for(let row = 0 ; row < rows; row++){
        let line = ''
        for(let col = 0 ; col <=row; col++){
            line += '* '
        }
        console.log(line)
    }
  // Output for rows=5:
  // *
  // **
  // ***
  // ****
  // *****
}

// Function 2: Inverted Triangle
// function invertedTriangle(rows) {
//       for(let row =  ; row <= rows; row--){
//         let line = ''
//         for(let col = 0 ; col <=row; col++){
//             line += '* '
//         }
//         console.log(line)
//       }
  // Output for rows=5:
  // *****
  // ****
  // ***
  // **
  // *
// }

// Function 3: Number Pyramid
function numberPyramid(rows) {
  // Output for rows=5:
  // 1
  // 1 2
  // 1 2 3
  // 1 2 3 4
  // 1 2 3 4 5
}

// Function 4: Diamond Pattern
function diamond(rows) {
  // Output for rows=5:
  //     *
  //    ***
  //   *****
  //  *******
  // *********
  //  *******
  //   *****
  //    ***
  //     *
}

// Test all functions
rightTriangle(5);
invertedTriangle(5);
// numberPyramid(5);
// diamond(5);