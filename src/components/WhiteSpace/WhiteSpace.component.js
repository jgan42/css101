import React from 'react';
import { NoWrap, Pre, PreWrap, WhiteSpaceElement, WordBreak } from './WhiteSpace.style';

const WhiteSpace = () => {
  const lorem = 'Lorem ipsum dolor sit amet, adipiscing elit, BREAK\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut DOUBLE_BREAK\n\nenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt BREAK\nin culpa qui officia deserunt mollit anim id est laborum.';

  return (<WhiteSpaceElement>
    <h3>"white-space: pre" : </h3>
    <Pre>{lorem}</Pre>
    <h3>"white-space: pre-wrap" : </h3>
    <PreWrap>{lorem}</PreWrap>
    <h3>"white-space: nowrap" : </h3>
    <NoWrap>{lorem}</NoWrap>
    <h3>"word-break: break-word" : </h3>
    <WordBreak>LONG_WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORD {lorem}</WordBreak>
  </WhiteSpaceElement>);
};

export default WhiteSpace;
