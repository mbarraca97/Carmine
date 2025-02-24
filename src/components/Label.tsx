import { Typography } from "@mui/material";

/* eslint-disable react-refresh/only-export-components */
export enum LabelSizes {
  BIG = '18px',
  MEDIUM = '16px',
  SMALL = '14px',
  XSMALL = '12px',
}

export enum LabelColors {
  RED = '#E60032',
  GREEN = '#00B02D',
  BLACK = '#000000',
  WHITE = '#ffffff',
  GREY = '#70787F',
}

interface LabelProps {
  size: LabelSizes;
  color: LabelColors;
  label: string;
}

export const Label = ({ size, color, label }: LabelProps) => {
  return <Typography style={{ fontSize: size, color: color, fontWeight: '400' }}>{label}</Typography>;
};
