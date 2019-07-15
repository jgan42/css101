import styled from 'styled-components';

export const BulkSelectorsElement = styled.div`
  padding-bottom: 20px;

  *:not(h3) {
    padding: 10px;
    border: 1px solid black;
    background-color: lightgray;
  }
  div * {
    display: inline-block;
  }
`;

export const EveryChild = styled.div`
  span {
    background-color: pink;
  }
`;

export const DirectChild = styled.div`
  & > span {
    background-color: pink;
  }
`;

export const DirectRightBrother = styled.div`
  .referrer-element + span {
    background-color: pink;
  }
`;

export const EveryRightBrother = styled.div`
  .referrer-element ~ span {
    background-color: pink;
  }
`;

export const FirstChild = styled.div`
  span:first-child {
    background-color: pink;
  }
`;

export const LastOfType = styled.div`
  span:last-of-type {
    background-color: pink;
  }
`;

export const Attribute = styled.div`
  span[title] {
    background-color: pink;
  }
`;

export const AttributeValue = styled.div`
  [title=title] {
    background-color: pink;
  }
`;

export const AttributeValueStart = styled.div`
  [title^=start] {
    background-color: pink;
  }
`;

export const AttributeValueEnd = styled.div`
  [title$=end] {
    background-color: pink;
  }
`;

export const AttributeValueMatch = styled.div`
  [title*=match] {
    background-color: pink;
  }
`;

export const NotClass = styled.div`
  span:not(.dont-select) {
    background-color: pink;
  }
`;
