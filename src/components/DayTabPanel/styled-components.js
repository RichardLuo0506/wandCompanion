import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { color } from '../theme';

export const DayTabPanelRoot = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
  &[hidden] {
    display: none;
  }
`;

export const TopSection = styled(Box)`
  width: 100%;
  height: 190px;
  flex: 1;
  position: relative;
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 110px;
  background: ${color.lighter};
`;
