import styled from 'styled-components';

export const CollapseElement = styled.div``;

export const FocusableDiv = styled.div`
  margin-bottom: 10px;

  span {
    display: block;
    background-color: lightblue;
  }

  div {
    display: none;
    background-color: lightgray;
  }

  &:focus div {
    display: block;
  }
`;

export const CheckBoxContainer = styled.div`
  margin-bottom: 10px;

  input {
    display: none;
  }
  label {
    display: block;
    background-color: lightblue;
  }
  
  div {
    display: none;
    background-color: lightgray;
  }

  input:checked ~ div {
    display: block;
  }
`;
