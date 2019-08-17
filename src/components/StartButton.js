import React from 'react';

// Styled Components
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({callback}) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)

export default StartButton;