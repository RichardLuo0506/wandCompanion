import styled from 'styled-components';
import { color, icon, MyIconButton } from '../common-styled-components';

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
  svg {
    color: ${icon.color.onDark};
  }

  &.selected {
    border-left-color: ${color.orange};
  }
`;

export const Content = styled.div``;
