import React, { useState } from 'react';
import { EmptyElement } from './Empty.style';
import Button from '@material-ui/core/Button';

const Empty = () => {
  const [value, setValue] = useState(false);

  return (<>
    <Button color="primary" onClick={() => setValue(!value)}>
      Toggle Value
    </Button>
    <EmptyElement>
      {value && <div>I am Filled !!</div>}
    </EmptyElement>
  </>);
};

export default Empty;
