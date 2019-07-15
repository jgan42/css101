import styled from 'styled-components';

export const AfterAttrElement = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid black;
  
  &:hover:after {
    content: attr(data-text);
    position: absolute;
    background-color: grey;
    padding: 10px;
    top: 100%;
    left: 50%;
  }
`;
