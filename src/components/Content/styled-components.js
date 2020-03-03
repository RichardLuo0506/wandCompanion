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
  color: rgba(0, 0, 0, 0.56);
  div {
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
  overflow: auto;
  height: 140px;
  color: ${text.color};
  }
    .non-button-icons {
      color: gainsboro;
      span {
        margin: 0;
        svg {
          font-size: 20px;
        }
      }
    }
    .active-punch {
      color: rgba(0, 0, 0, 0.87);
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
      font-size: 12px;
      div:nth-of-type(1),
      div:nth-of-type(2) {
        max-width: 72px;
        color: rgba(0, 0, 0, 0.87);
      }
    `;

export const AddWorkBtn = styled(MyButton)`
  color: gainsboro;
  span {
    margin: 0;
  }
`;
