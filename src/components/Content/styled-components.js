import styled from 'styled-components';
import { MyButton } from '../common-styled-components';
import { color, text } from '../common-styled-components';

export const ContentRoot = styled.div`
  position: relative;
  width: 100%;
  div::-webkit-scrollbar {
    display: none;
  }
  // *-moz-webkit solution depreciated in newer versions of Firefox. Current solution below
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
  width: 100%;
  padding: 0 16px;
  font-size: 12px;
  background: white;
  color: ${text.colorLight};
  div {
    flex: 25%;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  padding: 0 16px;
  overflow-y: auto;
  height: 140px;
  color: ${text.color};
`;

export const ToggleButtonsContainer = styled.div`
  div:nth-of-type(1) {
    justify-content: flex-end;
  }
  div:nth-of-type(2) {
    padding-left: 4px;
  }
`;

export const ActiveToggle = styled.div`
  margin: 0;
  cursor: pointer;
  svg {
    color: ${color.inactive};
    font-size: 20px;
    &.work-active {
      color: ${color.orange};
    }
    &.lunch-active {
      color: ${color.blue};
    }
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
    div {
      flex: 25%;
    }
  }
`;

export const EditButtonsContainer = styled.div`
  div:nth-of-type(2) {
    justify-content: flex-start;
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
