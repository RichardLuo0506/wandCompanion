import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { color } from '../../common-styled-components';

export const TabPanelWrapper = styled.div`
  flex: 1;
  position: relative;
  flex-direction: column;
  display: flex;
  &[hidden] {
    display: none;
  }
`;

export const TopSection = styled(Box)`
  width: 100%;
  flex: 1;
  position: relative;
`;

export const BottomSection = styled.div`
  width: 100%;
  background: ${color.lighter};
  height: 110px;
`;
