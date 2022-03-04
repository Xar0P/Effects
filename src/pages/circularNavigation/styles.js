import styled from 'styled-components';

export const Li = styled.li`
  --i: ${props => props.rotate}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #8460ed, #ff1252);

  .menu {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Li} {
      position: absolute;
      list-style: none;

      left: 20px;
      transform-origin: 80px;
      transition: .5s;
      transition-delay: calc(0.1s * var(--i));
      transform: rotate(0) translateX(60px);

      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        transform: rotate(calc(360deg / -5 * var(--i)));
      }

      > a > svg {
        width: 1.5em;
        height: 1.5em;
      }
    }

    &.active ${Li} {
      transform: rotate(calc(360deg / 5 * var(--i)));
    }

    > .toggle {
      position: absolute;
      width: 60px;
      height: 60px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 4px rgba(0,0,0,0.15);
      transition: transform 1.25s;

      > svg {
        width: 2em;
        height: 2em;
      }
    }

    &.active .toggle {
      transform: rotate(315deg);
    }

  }
`;
