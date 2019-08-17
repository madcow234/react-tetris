import { useState } from 'react';
import { createStage } from '../services/gameHelpers';

export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  return [stage, setStage];
}