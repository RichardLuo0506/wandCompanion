import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  useStyles,
  PopupTabsNavigationContainer,
  StyledTooltip,
  MyTabs
} from './styled-components';
import TodayIcon from '@material-ui/icons/Today';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DayTabPanel from '../DayTabPanel/DayTabPanel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default function PopupTabsNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PopupTabsNavigationContainer>
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
    </PopupTabsNavigationContainer>
  );
}
