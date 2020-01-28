import styled from 'styled-components';
import {
  Button as MUIButton,
} from '@material-ui/core';

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
`;

export const Button = styled(MUIButton)`
  display: block;
  height: 54px;
  width: 100px;
  margin: 0 auto 20px;
`;