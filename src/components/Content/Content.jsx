import React from 'react';
import { AddWorkBtn } from './styled-components';
import WorkIcon from '@material-ui/icons/Work';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CreateIcon from '@material-ui/icons/Create';

import {
  ContentRoot,
  ContentHeader,
  ContentContainer
} from './styled-components';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentRoot>
        <ContentHeader>Today</ContentHeader>
        <ContentContainer>
          <table>
            <tr>
              <th>In</th>
              <th>Out</th>
              <th>Work</th>
              <th>Lunch</th>
              <th>Edit</th>
            </tr>
            <tr>
              <td>08:00AM</td>
              <td>11:00AM</td>
              <td>
                <AddWorkBtn startIcon={<WorkIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<FastfoodIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<CreateIcon />} />
              </td>
            </tr>
            <tr>
              <td>08:00AM</td>
              <td>11:00AM</td>
              <td>
                <AddWorkBtn startIcon={<WorkIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<FastfoodIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<CreateIcon />} />
              </td>
            </tr>
            <tr>
              <td>08:00AM</td>
              <td>11:00AM</td>
              <td>
                <AddWorkBtn startIcon={<WorkIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<FastfoodIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<CreateIcon />} />
              </td>
            </tr>
            <tr>
              <td>08:00AM</td>
              <td>11:00AM</td>
              <td>
                <AddWorkBtn startIcon={<WorkIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<FastfoodIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<CreateIcon />} />
              </td>
            </tr>
            <tr>
              <td>08:00AM</td>
              <td>11:00AM</td>
              <td>
                <AddWorkBtn startIcon={<WorkIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<FastfoodIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<CreateIcon />} />
              </td>
            </tr>
            <tr>
              <td>08:00AM</td>
              <td>11:00AM</td>
              <td>
                <AddWorkBtn startIcon={<WorkIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<FastfoodIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<CreateIcon />} />
              </td>
            </tr>
            <tr>
              <td>08:00AM</td>
              <td>11:00AM</td>
              <td>
                <AddWorkBtn startIcon={<WorkIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<FastfoodIcon />} />
              </td>
              <td>
                <AddWorkBtn startIcon={<CreateIcon />} />
              </td>
            </tr>
          </table>
        </ContentContainer>
      </ContentRoot>
    );
  }
}
