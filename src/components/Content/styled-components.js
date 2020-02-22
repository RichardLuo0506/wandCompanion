import styled from 'styled-components';
import { MyButton } from '../common-styled-components';

export const ContentRoot = styled.div`
  position: relative;
  width: 100%;
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 16px;
  overflow: auto;
  height: 140px;
  table {
    width: 100%;
    display: flex;
    flex-direction: column;
    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      padding-bottom: 4px;
      > * {
        min-width: 57px;
        text-align: center;
        flex: auto;
      }
      th:nth-of-type(1),
      th:nth-of-type(2) {
        text-align: left;
      }
      td:nth-of-type(1),
      td:nth-of-type(2) {
        text-align: left;
      }
    }
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  padding: 8px 16px;
  font-size: 28px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  border: green 1px solid;
  overflow: auto;
`;

export const AddWorkBtn = styled(MyButton)`
  color: gainsboro;
  min-width: initial;
  span {
    margin: 0;
  }
`;
