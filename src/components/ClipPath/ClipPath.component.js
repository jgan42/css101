import React, { useState } from 'react';
import { ClipPathElement } from './ClipPath.style';
import Button from '@material-ui/core/Button';

const ClipPath = () => {
  const [value, setValue] = useState(true);

  return (
    <>
      <Button color="primary" onClick={() => setValue(!value)}>
        Toggle Value
      </Button>
      <ClipPathElement className={value ? 'star' : ''} />
    </>);
};

export default ClipPath;
