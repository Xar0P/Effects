import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li {
      position: relative;
      list-style: none;
      width: 20px;
      height: 20px;
      background-color: #777;
      margin: 20px 20px;
      border-radius: 50%;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        background-color: #86ff3b;
        box-shadow: 0 0 0 4px #333,
                    0 0 0 6px #86ff3b
      }

      .content {
        position: absolute;
        left: 40px;
        top: 50%;
        width: 400px;
        background-color: #ccc;
        transform: translateY(-50%);
        padding: 20px;
        border-radius: 4px;
        transition: .3s;
        visibility: hidden;
        opacity: 0;
        cursor: auto;

        &::after {
          content: '';
          position: absolute;
          background-color: #ccc;
          z-index: 2;
          width: 20px;
          height: 20px;
          transform: rotate(45deg) translateY(-50%);
          border-bottom-left-radius: 5px;
          left: -15px;
          top: 49%;
        }
      }

      &:hover .content {
        visibility: visible;
        opacity: 1;
      }

      /* .content {
        position: absolute;
        bottom: 40px;
        left: 300px;
        width: 400px;
        background-color: #fff;
        transform: translate(-50%);
        padding: 20px;

        border-radius: 4px;
        transition: .5s;

        cursor: auto;

        &::after {
          content: '';
          position: absolute;
          background-color: #fff;
          z-index: 2;
          width: 20px;
          height: 20px;
          transform: rotate(45deg);
          border-bottom-right-radius: 5px;
          left: 50%;
          bottom: -10px;
        }
      }

      &:hover .content {
        visibility: visible;
        opacity: 1;
      } */
    }
  }
`;
