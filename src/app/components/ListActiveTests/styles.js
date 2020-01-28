import styled from 'styled-components';
import {
  Fab as MUIFab,
  Button as MUIButton,
  IconButton as MUIIconButton,
  Typography as MUITypography,
} from '@material-ui/core';

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
`;

export const CustomTypography = styled(MUITypography)`
  margin: 40px 0;
  text-align: center;
`;

export const Button = styled(MUIButton)`
  height: 54px;
  margin: 0 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonIcon = styled(MUIIconButton)`
  margin-right: 13px;
`;

export const CustomFab = styled(MUIFab)`
  margin-left: 20px;
  transition-duration: 1s;
  transition-property: transform;
  &:active {
    transform: rotate(360deg);
    transition:  0s;
  }
`;
