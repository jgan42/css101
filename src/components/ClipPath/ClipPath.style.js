import styled from 'styled-components';

export const ClipPathElement = styled.div`
  height: 600px;
  width: 600px;
  background-color: lightblue;
  transition: all ease 1.5s;
  clip-path: polygon(50% 0%,100% 0,100% 25%,100% 60%,100% 100%,50% 100%,0% 100%,0% 60%,0% 25%,0% 0%);

  &.star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
`;
