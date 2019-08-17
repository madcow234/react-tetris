import React from 'react';

// Styled Components
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({gameOver, text}) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
)

export default Display;