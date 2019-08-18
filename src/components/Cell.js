import React from 'react';
import { TETROMINOS } from '../services/tetrominos';

// Styled Components
import { StyledCell } from './styles/StyledCell';

const Cell = ({type}) => (
  <StyledCell type={type} color={TETROMINOS[type].color} >{console.log("re-render")}</StyledCell>
)

// Export the cell with React.memo() so the cell only re-renders when it changes
export default React.memo(Cell);