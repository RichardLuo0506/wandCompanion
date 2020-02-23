import React from 'react';
import Tab from '@material-ui/core/Tab';
import {
  useStyles,
  PopupTabsNavigationRoot,
  StyledTooltip,
  MyTabs
} from './styled-components';
import TodayIcon from '@material-ui/icons/Today';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DayTabPanel from '../DayTabPanel/DayTabPanel';
import Branding from '../../Branding/Branding';

export default function PopupTabsNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PopupTabsNavigationRoot>
      <Branding />
      <MyTabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        <StyledTooltip title="Day" placement="right">
          <Tab className={classes.tab} icon={<TodayIcon />} />
        </StyledTooltip>
        <StyledTooltip title="Week" placement="right">
          <Tab className={classes.tab} icon={<ViewWeekIcon />} />
        </StyledTooltip>
        <StyledTooltip title="History" placement="right">
          <Tab className={classes.tab} icon={<ListAltIcon />} />
        </StyledTooltip>
      </MyTabs>
      <DayTabPanel value={value} index={0} />
    </PopupTabsNavigationRoot>
  );
}
