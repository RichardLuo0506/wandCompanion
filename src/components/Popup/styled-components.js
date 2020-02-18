import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { color, icon, MyIconButton } from '../common-styled-components';
import Box from '@material-ui/core/Box';

export const PopupContainer = styled.div`
  display: flex;
  width: 400px;
  height: 300px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 64px;
  background: ${color.dark};
`;

export const MenuItem = styled(MyIconButton)`
  width: 100%;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  transition: 200ms;
  svg {
    color: ${icon.color.onDark};
    transition: 200ms;
  }

  &.selected,
  &:hover {
    svg {
      color: white;
    }
  }

  &.selected {
    border-left-color: ${color.orange};
  }
`;

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    marginLeft: `12px`
  }
}))(Tooltip);

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const TabContent = styled.div`
  display: none;
  width: 100%;
  &.show {
    display: flex;
  }

  &.addTime {
    height: 100%;
    flex-direction: column;
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
