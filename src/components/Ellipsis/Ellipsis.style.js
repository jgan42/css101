import styled from 'styled-components';

export const EllipsisElement = styled.div`
`;

export const HorizontalEllipsis = styled.div`
  width: 500px;
  margin: auto;
  border: 1px solid black;
  
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const VerticalEllipsis = styled.div`
  border: 1px solid black;
  
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;
