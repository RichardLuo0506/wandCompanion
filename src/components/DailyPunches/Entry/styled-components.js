import styled from 'styled-components';
import { MyButton, icon, text, color } from '../../theme';

export const EntryRoot = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 12px;
  > div {
    display: flex;
    flex: 0 0 25%;
  }
`;

export const StartTime = styled.div`
  color: ${text.color};
`;

export const EndTime = styled.div`
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
