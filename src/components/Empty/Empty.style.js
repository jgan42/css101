import styled from 'styled-components';

export const EmptyElement = styled.div`
  padding: 20px;
  background-color: lightblue;
  text-align: center;

  &:empty:after {
    content: 'I am empty ...';
  }
`;
