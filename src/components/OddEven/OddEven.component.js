import React from 'react';
import { OddEvenElement } from './OddEven.style';

const OddEven = () => {
  const list = new Array(10).fill(0);
  return (<OddEvenElement>
    {list.map((item, i) => <div key={i}>{i % 2 ? 'pair (even)': 'impair (odd)'}</div>)}
  </OddEvenElement>)
};

export default OddEven;
