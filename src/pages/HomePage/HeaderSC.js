import Styled from 'styled-components';

export const HeaderWrapper = Styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 1em;
  .header-logo {
    width: 130px;
    heght: 50px;
  }
  .header-btn {
    button {
      background-color: #F0F8FF;
      margin-left: 1em;
      border:none;
      padding: 1em 1.5em;
      color: #4B9CE2;
      border-radius: 8px;
    }
  }
`;