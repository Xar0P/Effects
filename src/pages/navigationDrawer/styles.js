import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #6834d1;

  > .container {
    position: relative;

    > .navigation {
      position: relative;
      width: 80px;
      height: 420px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      transition: .5s;

      &.active {
        width: 200px;
      }

      &.active .content {
        left: 220px;
      }

      > ul {
        clear: both;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

      }
    }
  }

  .toggle {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #f5f5f5;
    cursor: pointer;
    right: -20px;
    top: calc(50% - 20px);
    border: 5px solid #6834d1;
    border-radius: 50%;

    &::before {
      content: '>';
      position: absolute;
      width: 100%;
      height: 100%;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      color: #6834d1;
    }

    &.active::before {
      content: '<';
      position: absolute;
      width: 100%;
      height: 100%;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      color: #6834d1;
    }
  }
`;


export const WrapperElement = styled.li`
  display: flex;
  list-style: none;
  width: 100%;
  position: relative;

  > div {
    width: 100%;
    overflow: hidden;

    > .content {
      width: 300px;
      position: absolute;
      left: 100px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      padding: 20px;
      visibility: hidden;
      opacity: 0;
      transition: .2s;
      border-radius: 5px;
    }

    &:hover > .content {
      visibility: visible;
      opacity: 1;
    }

    &:hover {
      background-color: #efefef;
    }

    > a {
      position: relative;
      display: block;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: #6843cf;

      > .icon {
        position: relative;
        display: block;
        min-width: 80px;
        height: 60px;
        line-height: 60px;
        text-align: center;

        > svg {
          font-size: 24px;
        }

      }

      > .title {
        position: relative;
        display: block;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
      }
    }
  }

`;