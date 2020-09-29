import styled from 'styled-components';
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';

export const GridItem = styled(Grid).attrs({
  item: true,
  xs: 6,
  sm: 3,
  md: 3,
  xl: 2,
  lg: 2,
})``;

export const ProductCard = styled(Card)``;

export const ProductCardContent = styled(CardContent)``;

export const ProductName = styled(Typography).attrs({
  variant: 'h5',
  component: 'h5',
})``;

export const ProductPrice = styled(Typography).attrs({
  variant: 'body2',
  component: 'p',
})``;

export const ProductEmptyImg = styled.div`
  width: 90%;
  height: 150px;
  text-align: center;
  margin: 10px auto;
  border: 1px solid grey;
  line-height: 150px;
`;

export const ActionWrapper = styled(CardActions)``;

export const AddToCardButton = styled(Button).attrs({
  size: 'small',
  color: 'secondary',
  variant: 'contained',
})`
  width: 100%;
`;
