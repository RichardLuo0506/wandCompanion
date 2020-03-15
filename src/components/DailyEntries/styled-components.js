import styled from 'styled-components';
import { color, text } from '../theme';

export const DailyEntriesRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

export const Title = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${color.dark};
`;

export const EntriesTable = styled.div`
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
  margin-bottom: 4px;
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
  &::-webkit-scrollbar {
    display: none;
  }
`;
