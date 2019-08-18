import { useState, useEffect } from 'react';
import { createStage } from '../services/gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = newStage =>
      newStage.reduce((acc, row) => {
        // A row should be cleared when it is filled with tetrominos
        // A row will be filled with tetrominos when the type of each cell is not 0
        // If findIndex does not find any cells with type 0, it will return -1
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          // Increment the total number of rows cleared in this round
          setRowsCleared(prev => prev + 1);
          // Add a new clean row to the top of the stage
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          // Return the accumulator without adding the current row
          return acc;
        }

        // Otherwise, add the current row and return the accumulator
        acc.push(row);
        return acc;
      }, []);

    const updateStage = prevStage => {
      // First, flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Then, draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      });

      // Then check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    }

    setStage(prev => updateStage(prev))

  }, [player, resetPlayer])

  return [stage, setStage, rowsCleared];
}