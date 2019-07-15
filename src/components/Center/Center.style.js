import styled from 'styled-components';

export const CenterElement = styled.div`
  & > div {
    height: 600px;
    width: 600px;
    margin: 20px;
    border: 1px solid black;
  }
`;

export const ToCenter = styled.div`
  padding: 10px;
  background-color: lightblue;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AbsoluteCenter = styled.div`
  position: relative;
  
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InlineBlockCenter = styled.div`
  text-align: center;

  div {
    display: inline-block;
  }
  
  &:after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;
