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

export const EntriesHeaders = styled.div`
  display: flex;
  z-index: 1;
  font-size: 12px;
  padding-bottom: 4px;
  background: white;
  color: ${text.colorLight};
  > div {
    width: 100%;
  }
  div:last-of-type {
    text-align: right;
    padding-right: 4px;
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
  span:nth-of-type(2) {
    padding-left: 4px;
  }
`;

export const ActiveToggle = styled.div`
  margin: 0px;
  svg {
    color: ${color.inactive};
    font-size: 20px;
  }
  svg.active {
    color: ${text.color};
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
    font-size: 12px;
    div:nth-of-type(1),
    div:nth-of-type(2) {
      max-width: 25%;
      color: ${text.color};
    }
  `;

export const AddWorkBtn = styled(MyButton)`
  color: ${text.colorLight};
  span {
    margin: 0;
  }
`;
