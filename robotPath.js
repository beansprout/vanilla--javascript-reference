// // robot path

// // for loop that pushes empty 
// // make board 2 x 2 matrix
// // 
// // toggle function
// const makeBoard = (n) => {
//   let board = [];
//   // for loop {
//     board[i].push(false);
//   }
//   board.toggle
//   // i is row (left and right)
// // function toggle refers to toggling coordinates off and on
//  board.toggle = (i, j) => {
//   board[i][j] = !board[i][j];
// };
// board.hasBeenVisited = (i, j) => {
//   return board[i][j];
// };

const robotPaths = (n) => { // n is grid size
  let pathCounter = 0;
  const board = makeBoard(n);
}

const makeBoard = (n) => {
  let board = [];
  // i == rows in the matrix
  // j == columns in the matrix
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.toggle = (i, j) => {
    board[i][j] = !board[i][j];
  };
  board.hasBeenVisited = (i, j) => {
    return board[i][j];
  };
  return board;
};

const robotPaths = (n) => { // n is grid dimension i.e 2 for a 2x2 grid
  let pathCounter = 0;
  const board = makeBoard(n);

  const traversePaths = (i, j) => { // 
    // robot at 0,0 case;
    // first base case if i && j are equal to n-1; 
    // are we at very bottom of grid
    if (i === n - 1 && j === n - 1) {
      // (2, 2)
      pathCounter++;
      return;
    }
    // robot out of bounds case;
    // if && j are i >= n or less than 0;
    // if robot falls off grid
    if (i < 0 || i >= n || j < 0 || j >= n) {
      return;
    }
    if (board.hasBeenVisited(i,j)) {
      return;
    }
    else {
      // start checking your path and move
      board.toggle(i, j);
      // move the robot right, down, left, up
      traversePaths(i, j + 1);
      traversePaths(i + 1, j);
      traversePaths(i, j - 1);
      traversePaths(i - 1, j);
      // toggle piece back 
      board.toggle(i, j);
    }
  };
  traversePaths(0, 0);
  return pathCounter;
};

robotPaths(4);

// make a board
// if we visited square 