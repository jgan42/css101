import styled from 'styled-components';

export const OddEvenElement = styled.div`
  div {
    padding: 10px;
  }

  div:nth-child(even) {
    background-color: grey;
  }

  div:nth-child(odd) {
    background-color: pink;
  }
`;
