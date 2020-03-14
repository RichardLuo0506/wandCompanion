import styled from 'styled-components';
import { MyButton, color, text, icon } from '../theme';

export const DailyPunchesRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  color: ${color.dark};
`;

export const PunchesTable = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const TableHeaders = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  padding: 0 16px;
  font-size: 12px;
  background: white;
  color: ${text.colorLight};
  div {
    flex: 1;
  }
`;

export const Entries = styled.div`
  position: relative;
  padding: 0 16px;
  overflow-y: auto;
  color: ${text.color};
  flex: 1;
`;

export const Entry = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 12px;
  div:nth-of-type(1),
  div:nth-of-type(2) {
    display: flex;
    color: ${text.color};
  }
  div {
    display: flex;
    flex: 25%;
  }
`;

export const StartTime = styled.div``;

export const EndTime = styled.div``;

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
    color: ${icon.color.muted};
    font-size: 20px;
    &.work-active {
      color: ${color.orange};
    }
    &.lunch-active {
      color: ${color.blue};
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
