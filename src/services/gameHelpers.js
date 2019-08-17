export const STAGE_WIDTH = 12; // numCols
export const STAGE_HEIGHT = 20; // numRows

/**
 * Returns a 2-dimensional array of cells, where each cell contains an instruction-set array of 2 elements as follows:
 *  cell[0]: type of tetromino, one of [0, I, J, L, O, S, Z, T]  - instructs which tetromino shape and color this cell is part of
 *  cell[1]: instruction for rendering, one of ['clear', 'merge'] - informs whether a cell has collided with another cell 
 */
export const createStage = () => Array(STAGE_HEIGHT).fill(Array(STAGE_WIDTH).fill([0, 'clear']))