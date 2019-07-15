import React from 'react';
import { AbsoluteCenter, CenterElement, FlexCenter, InlineBlockCenter, ToCenter } from './Center.style';

const Center = () => {
  return (<CenterElement>
    <FlexCenter>
      <ToCenter>Flex Center</ToCenter>
    </FlexCenter>
    <AbsoluteCenter>
      <ToCenter>Absolute Center</ToCenter>
    </AbsoluteCenter>
    <InlineBlockCenter>
      <ToCenter>Inline Block Center</ToCenter>
    </InlineBlockCenter>
  </CenterElement>);
};

export default Center;
