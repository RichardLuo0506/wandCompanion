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
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  PopupContainer,
  Sidebar,
  MenuItem,
  Content,
  TabContent,
  StyledTooltip,
  TopSection,
  BottomSection
} from './styled-components';
import TimeRow from '../TimeRow/TimeRow';
import AddTimeBtnGrp from '../AddTimeBtnGrp/AddTimeBtnGrp';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.onMenuItemClick = this.onMenuItemClick.bind(this);

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
    const { menuItems, selectedMenuItem, hoveredAddTimeBtn } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <StylesProvider jss={jss}>
            <PopupContainer>
              <Sidebar>
                {menuItems.map(menuItem => {
                  return (
                    <StyledTooltip
                      key={menuItem.id}
                      title={menuItem.title}
                      placement="right"
                      className={selectedMenuItem === menuItem.id && 'selected'}
                    >
                      <MenuItem
                        onClick={() => {
                          this.onMenuItemClick(menuItem.id);
                        }}
                      >
                        {menuItem.icon}
                      </MenuItem>
                    </StyledTooltip>
                  );
                })}
              </Sidebar>
              <Content>
                <TabContent
                  className={`${selectedMenuItem === 'addTime' &&
                    'show'} addTime`}
                >
                  <TopSection boxShadow={2} />
                  <BottomSection>
                    <TimeRow hoveredAddTimeBtn={hoveredAddTimeBtn} />
                    <AddTimeBtnGrp
                      onHover={this.addTimeBtnGrpHover.bind(this)}
                    />
                  </BottomSection>
                </TabContent>
              </Content>
            </PopupContainer>
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }

  onMenuItemClick(id) {
    alert(id);
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
