import styled from 'styled-components';
import { MyButton } from '../common-styled-components';
import { color, text } from '../common-styled-components';

export const ContentRoot = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  color: ${color.dark};
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 106%;
  padding: 0px 16px;
  overflow: auto;
  height: 140px;
  color: ${text.color};
  .entries-headers {
    position: fixed;
    display: flex;
    z-index: 1;
    width: 322px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding-bottom: 4px;
    max-height: 24px;
    background: white;
    color: rgba(0, 0, 0, 0.56);
    div:nth-of-type(1),
    div:nth-of-type(2) {
      justify-content: left;
    }
    div:nth-of-type(3) {
      text-align: center;
    }
    > * {
      min-width: 57px;
      justify-content: center;
      flex: auto;
    }
  }
  .entries {
    position: relative;
    width: 322px;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    div {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      padding-bottom: 4px;
      max-height: 24px;
      div:nth-of-type(1),
      div:nth-of-type(2) {
        justify-content: left;
        color: rgba(0, 0, 0, 0.56);
      }
      > * {
        min-width: 57px;
        justify-content: center;
        flex: auto;
      }
    }
    .non-button-icons {
      color: gainsboro;
      min-width: initial;
      span {
        margin: 0;
      }
    }
  }
`;

export const AddWorkBtn = styled(MyButton)`
  color: gainsboro;
  min-width: initial;
  span {
    margin: 0;
  }
`;
