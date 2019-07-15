import styled from 'styled-components';

export const Rotation3DElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
`;

export const ToRotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  background-color: lightblue;
  font-size: 50px;
  
  animation: rotate-3d infinite 10s;
  
  @keyframes rotate-3d {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(180deg);
    }
    50% {
      transform: rotateY(360deg);
    }
    75% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
`;
