import React from 'react';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point')
});

import Tooltip from '@material-ui/core/Tooltip';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  PopupContainer,
  Sidebar,
  MenuItem,
  Content
} from './styled-components';

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
      ]
    };
  }

  componentDidMount() {
    this.selectMenuItem('addTime');
  }

  render() {
    const { menuItems } = this.state;
    const { selectedMenuItem } = this.state;
    return (
      <StylesProvider jss={jss}>
        <PopupContainer>
          <Sidebar>
            {menuItems.map(menuItem => {
              return (
                <Tooltip
                  key={menuItem.id}
                  title={menuItem.title}
                  placement="right"
                  className={selectedMenuItem === menuItem.id && 'selected'}
                >
                  <MenuItem>{menuItem.icon}</MenuItem>
                </Tooltip>
              );
            })}
          </Sidebar>
          <Content />
        </PopupContainer>
      </StylesProvider>
    );
  }

  selectMenuItem(id) {
    this.setState({ selectedMenuItem: id });
  }
}
