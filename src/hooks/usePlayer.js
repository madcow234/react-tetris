import { useState } from 'react';
import { randomTetromino } from '../services/tetrominos';

export const usePlayer = () => {
  const [player] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  });

  return [player];
}