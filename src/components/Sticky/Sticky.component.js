import React from 'react';
import { StickyElement } from './Sticky.style';

const Sticky = () => {
  const list = new Array(100).fill(0);

  return (<StickyElement>
    {list.map((item, i) =>
      <div key={i} className={i === 7 ? 'stick' : ''}>
        {i === 7 ? 'I am STICKY': 'normal ...'}
      </div>
    )}
  </StickyElement>);
};

export default Sticky;
