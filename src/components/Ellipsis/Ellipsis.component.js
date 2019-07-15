import React from 'react';
import { EllipsisElement, HorizontalEllipsis, VerticalEllipsis } from './Ellipsis.style';

const Ellipsis = () => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (<EllipsisElement>
    <h2>Horizontal Ellipsis</h2>
    <HorizontalEllipsis>{lorem}</HorizontalEllipsis>
    <h2>Vertical Ellipsis</h2>
    <VerticalEllipsis>{lorem}{lorem}</VerticalEllipsis>
  </EllipsisElement>);
};

export default Ellipsis;
