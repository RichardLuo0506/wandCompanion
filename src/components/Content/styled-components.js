import styled from 'styled-components';
import { MyButton } from '../common-styled-components';
import { color, text } from '../common-styled-components';

export const ContentRoot = styled.div`
  position: relative;
  width: 100%;
  div::-webkit-scrollbar {
    display: none;
  }
  //-moz-webkit solution removed. Current solution below
  @-moz-document url-prefix() {
    > div:nth-of-type(2) {
      overflow-x: hidden;
      margin-right: -16px;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  color: ${color.dark};
`;

export const EntriesHeaders = styled.div`
  display: flex;
  z-index: 1;
  font-size: 12px;
  padding-bottom: 4px;
  background: white;
  color: ${text.colorLight};
  div:nth-of-type(1),
  div:nth-of-type(2) {
    width: 22.5%;
  }
  div:nth-of-type(3) {
    width: 25%;
  }
  div:nth-of-type(4) {
    width: 15%;
    text-align: center;
    margin-right: 3px;
  }
  div:nth-of-type(5) {
    width: 15%;
    text-align: right;
    padding-right: 3px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  padding: 0px 16px;
  overflow-y: auto;
  height: 140px;
  color: ${text.color};
`;

export const ToggleButtonsContainer = styled.div`
  div:nth-of-type(2) {
    padding-left: 8px;
  }
`;

export const ActiveToggle = styled.div`
  margin: 0px;
  svg {
    color: ${color.inactive};
    font-size: 20px;
  }
  svg.work-active {
    color: ${color.orange};
  }
  svg.lunch-active {
    color: ${color.blue};
  }
`;

export const Entries = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  div {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 12px;
    div:nth-of-type(1),
    div:nth-of-type(2) {
      color: ${text.color};
    }
    div:nth-of-type(1),
    div:nth-of-type(2) {
      width: 22.5%;
    }
    div:nth-of-type(3) {
      width: 25%;
    }
    div:nth-of-type(4),
    div:nth-of-type(5) {
      width: 15%;
    }
    div:nth-of-type(4){
      justify-content: center;
    }
    div:nth-of-type(5) {
      justify-content:flex-end;
    }
  `;

export const IconButtonWrapper = styled.div`
  justify-content: flex-end;
`;

export const AddWorkBtn = styled(MyButton)`
  color: ${text.colorLight};
  span {
    margin: 0;
  }
`;
