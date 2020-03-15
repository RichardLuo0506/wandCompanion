import React from 'react';
import { create } from 'jss';
import {
  StylesProvider,
  jssPreset,
  ThemeProvider
} from '@material-ui/core/styles';
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point')
});
import { theme } from '../theme';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import PopupTabsNavigation from '../PopupTabsNavigation/PopupTabsNavigation';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import SettingsIcon from '@material-ui/icons/Settings';
import { PopupContainer } from './styled-components';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        {
          id: 'addTime',
          title: 'Add Time',
          icon: <AddAlarmIcon />
        },
        {
          id: 'settings',
          title: 'Settings',
          icon: <SettingsIcon />
        }
      ],
      hoveredAddTimeBtn: ''
    };
  }

  componentDidMount() {
    this.selectMenuItem('addTime');
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <StylesProvider jss={jss}>
            <PopupContainer>
              <PopupTabsNavigation />
            </PopupContainer>
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }

  selectMenuItem(id) {
    this.setState({ selectedMenuItem: id });
  }

  addTimeBtnGrpHover(type) {
    this.setState({
      hoveredAddTimeBtn: type
    });
  }
}
