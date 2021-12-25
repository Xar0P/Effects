import styled from 'styled-components';

export const Container = styled.section`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ul {
    position: relative;
    display: flex;
    flex-direction: column;

    li {
      list-style: none;

      a {
        position: relative;
        display: inline-block;
        margin: 10px 0;
        font-size: 4em;
        text-decoration: none;
        color: #fff;
        transition: 0.2s;
      }
    }

    .cursor {
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      transform: translate(-50%, -50%);
      pointer-events: none;
      mix-blend-mode: difference;
    }

    li:hover ~ .cursor {
      transform: scale(6);
    }
  }
`;