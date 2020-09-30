import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';

import * as Styled from './cart.styled';
import { CartProduct } from 'src/redux/cart/cart.duck';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

type Actions = {
  removeFromCart: Function;
  AddQuantity: Function;
  removeQuantity: Function;
};

interface Props {
  actions: Actions;
  isDrawerOpen: boolean;
  closeDrawer: Function;
  cartList: CartProduct[];
  isCartEmpty: boolean;
  totalItem: number;
  totalCost: number;
}

export default ({ actions, isDrawerOpen, closeDrawer, cartList, isCartEmpty, totalItem, totalCost }: Props) => {
  return (
    <>
      <Styled.CartDrawer open={isDrawerOpen} onClose={() => closeDrawer()}>
        <Styled.CloseDrawerIconWrapper>
          <CloseIcon onClick={() => closeDrawer()} />
        </Styled.CloseDrawerIconWrapper>
        <Styled.CartTitle>My Cart</Styled.CartTitle>
        {isCartEmpty ? (
          <Styled.EmptyCartWrapper>
            <Styled.EmptyCartTitle>You don't have anything in cart</Styled.EmptyCartTitle>
            <Styled.EmptyCartButton onClick={() => closeDrawer()}>Let's Shopping</Styled.EmptyCartButton>
          </Styled.EmptyCartWrapper>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Price</StyledTableCell>
                    <StyledTableCell>Quantity</StyledTableCell>
                    <StyledTableCell>Sub Total ($)</StyledTableCell>
                    <StyledTableCell>Remove</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartList.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">${row.price}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Styled.ActionButton onClick={() => actions.removeQuantity(row)}>-</Styled.ActionButton>
                        <Styled.QuantityWrapper>{row.quantity}</Styled.QuantityWrapper>
                        <Styled.ActionButton onClick={() => actions.AddQuantity(row)}>+</Styled.ActionButton>
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.subTotal.toFixed(2)}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Styled.CancelIconWrapper onClick={() => actions.removeFromCart(row)}>
                          <CancelIcon />
                        </Styled.CancelIconWrapper>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Styled.TotalGroupView>
              <Styled.TotalDisplayWrapper>Total Item: {totalItem}</Styled.TotalDisplayWrapper>
              <Styled.TotalDisplayWrapper>Total Cost: ${totalCost.toFixed(2)}</Styled.TotalDisplayWrapper>
            </Styled.TotalGroupView>
          </>
        )}
      </Styled.CartDrawer>
    </>
  );
};
