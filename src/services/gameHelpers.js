export const STAGE_WIDTH = 12; // numCols
export const STAGE_HEIGHT = 20; // numRows

/**
 * Returns a 2-dimensional array of cells, where each cell contains an instruction-set array of 2 elements as follows:
 *  cell[0]: type of tetromino, one of [0, I, J, L, O, S, Z, T]  - instructs which tetromino shape and color this cell is part of
 *  cell[1]: instruction for rendering, one of ['clear', 'merge'] - informs whether a cell has collided with another cell 
 */
export const createStage = () => Array(STAGE_HEIGHT).fill(Array(STAGE_WIDTH).fill([0, 'clear']))

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // Check that we're on an actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // Check that our move is inside the game area's height (y)
          // We shouldn't go through the bottom of the play area
          !stage[y + player.pos.y + moveY] || 
          // Check that our move is inside the game area's width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // Check that the cell we're moving to is not set to 'clear'
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
}