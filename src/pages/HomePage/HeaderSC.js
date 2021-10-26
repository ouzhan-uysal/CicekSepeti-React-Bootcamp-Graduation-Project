import Styled from 'styled-components';

export const HeaderWrapper = Styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: #fff;
  align-items: center;
  padding: 1em;
  .header-logo {
    margin: 0 10rem;
    width: 130px;
    heght: 50px;
  }
  .header-btn {
    margin: 0 10rem;
    text-align: end;
    button {
      white-space: nowrap;
      background-color: #F0F8FF;
      margin-left: 1em;
      border:none;
      padding: 1em 1.5em;
      color: #4B9CE2;
      border-radius: 8px;
    }
  }
`;