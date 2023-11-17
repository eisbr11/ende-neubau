import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(2);
  }
  50% {
    transform: rotate(180deg) scale(2);
  }
  100% {
    transform: rotate(360deg) scale(2);
  }
`;

export const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  opacity: 1;
  z-index: -10;
  overflow: hidden;
  position: fixed;
  background: #ecb22f;

  > svg {
    flex: 1;
    vertical-align: middle;
  }

  > svg > g {
    animation: ${rotate} 120s infinite linear;
    transform-origin: center;
`;
