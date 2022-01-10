import React, { FC, Fragment } from 'react';
import { BlockType } from '../types/Node';
import colors from '../constants/colors';
import { styled } from "@mui/material/styles";

const Block: FC<BlockType> = ({ id, attributes: { data } }) => (
  <Fragment>
    <BlockTypographyHeading>{id}</BlockTypographyHeading>
    <BlockTypographyText>{data}</BlockTypographyText>
  </Fragment>
);

const BlockTypographyHeading = styled('span')(() => ({
  color: colors.blue,
  fontfamily: 'Roboto',
  fontSize: '10px',
  fontStyle: 'normal',
  fontweight: 700,
  lineHeight: '16px',
  letterSpacing: '1.5px',
  textAlign: 'left',
}));

const BlockTypographyText = styled('span')(() => ({
  fontfamily: 'Roboto',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0.25px',
  textAlign: 'left',
}));

export default Block;
