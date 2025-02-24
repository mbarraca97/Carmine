import { Typography } from "@mui/material";

/* eslint-disable react-refresh/only-export-components */
export enum TitleSizes {
  BIG = '42px',
  MEDIUM = '24px',
  SMALL = '12px',
}

export enum TitleColors {
  RED = '#E60032',
  GREEN = '#00B02D',
  BLACK = '#000000',
  WHITE = '#ffffff',
}

interface TitleProps {
  size: TitleSizes;
  color: TitleColors;
  label: string;
}

export const Title = ({ size, color, label }: TitleProps) => {
  return <Typography style={{ fontSize: size, color: color, fontWeight: '500' }}>{label}</Typography>;
};
