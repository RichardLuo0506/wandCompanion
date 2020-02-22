import React from 'react';
import PropTypes from 'prop-types';
import {
  TabPanelWrapper,
  TopSection,
  BottomSection
} from './styled-components';
import TimeRow from '../../TimeRow/TimeRow';
import AddTimeBtnGrp from '../../AddTimeBtnGrp/AddTimeBtnGrp';
import Content from '../../Content/Content';

export default class TabPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredAddTimeBtn: ''
    };
  }

  render() {
    const { value, index, ...other } = this.props;
    const { hoveredAddTimeBtn } = this.state;

    return (
      <TabPanelWrapper role="tabpanel" hidden={value !== index} {...other}>
        <TopSection boxShadow={2}>
          <Content />
        </TopSection>
        <BottomSection>
          <TimeRow hoveredAddTimeBtn={hoveredAddTimeBtn} />
          <AddTimeBtnGrp onHover={this.addTimeBtnGrpHover.bind(this)} />
        </BottomSection>
      </TabPanelWrapper>
    );
  }

  // TODO: throttle this
  addTimeBtnGrpHover(type) {
    this.setState({
      hoveredAddTimeBtn: type
    });
  }
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
