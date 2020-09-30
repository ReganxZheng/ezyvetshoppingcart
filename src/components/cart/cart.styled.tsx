import styled from 'styled-components';
import { Drawer, Button, Typography } from '@material-ui/core';

export const CartDrawer = styled(Drawer).attrs({
  anchor: 'right',
})``;

export const QuantityWrapper = styled.span`
  font-weight: 400;
  width: 20px;
  margin: 0 5px;
`;

export const ActionButton = styled.span`
  cursor: pointer;
  color: #000000;
  background: '#b9b9b9';
  font-weight: 400;
  font-size: 16px;
`;

export const CancelIconWrapper = styled.div`
  color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      color: #c1272d;
      border-radius: 50%;
    }
  }
`;

export const EmptyCartWrapper = styled.div`
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const EmptyCartTitle = styled.h4``;

export const EmptyCartButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
})``;

export const TotalGroupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 20px;
`;

export const TotalDisplayWrapper = styled(Typography).attrs({
  gutterBottom: true,
  variant: 'subtitle1',
})``;

export const CartTitle = styled(Typography).attrs({
  gutterBottom: true,
  variant: 'h3',
})`
  text-align: center;
  margin: 10px 0;
`;

export const CloseDrawerIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px 10px;

  svg {
    cursor: pointer;
  }

  &:hover {
    svg {
      color: #c1272d;
      border-radius: 50%;
    }
  }
`;
