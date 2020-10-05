import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonExampleProps } from './types';

const ButtonExample = ({ text }: ButtonExampleProps) => {
  return (
    <Button
      color="primary"
      variant="contained"
    >
      {text}
    </Button>
  );
};

export default ButtonExample;
