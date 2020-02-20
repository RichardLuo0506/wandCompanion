import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { icon } from '../../common-styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import Tabs from '@material-ui/core/Tabs';

export const useStyles = makeStyles(theme => ({
  tab: {
    minWidth: `auto`,
    color: icon.color.onDark,
    transition: `${theme.transitions.easing.easeOut} ${theme.transitions.duration.shorter}ms`,
    '&.Mui-selected, &:hover': {
      color: `white`
    }
  }
}));

export const PopupTabsNavigationContainer = styled.div`
  display: flex;
  flex-grow: 1;
  .MuiTabs-indicator {
    right: auto;
    left: 0;
  }
`;

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    marginLeft: `12px`
  }
}))(Tooltip);

export const MyTabs = withStyles(theme => ({
  flexContainerVertical: {
    width: `64px`,
    backgroundColor: theme.palette.background.dark,
    height: `100%`,
    justifyContent: `center`
  }
}))(Tabs);

export const disabled = styled.div`
  disabled: true;
`;
