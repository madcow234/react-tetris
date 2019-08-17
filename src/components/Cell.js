import React from 'react';

// Components
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../services/tetrominos';

const Cell = ({type}) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>cell</StyledCell>
)

export default Cell;