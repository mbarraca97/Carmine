import React, { JSX } from 'react';
import { ButtonVariantEnum, IconPlacementEnum, TitleColors } from '../types/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'; 

const ButtonStyles = {
  [ButtonVariantEnum.minimal]: {
    color: '#70787F',
    backgroundColor: 'transparent',
    border: '2px solid #ddd',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  [ButtonVariantEnum.minimalError]: {
    color: '#E60032',
    backgroundColor: 'transparent',
    border: '1px solid #E60032',
    '&:hover': {
      backgroundColor: '#ffe6e6',
    },
  },
  [ButtonVariantEnum.primary]: {
    color: '#fff',
    backgroundColor: TitleColors.GREEN,
    '&:hover': {
      backgroundColor: '#008021',
    },
  },
  [ButtonVariantEnum.error]: {
    color: '#fff',
    backgroundColor: '#E60032',
    '&:hover': {
      backgroundColor: '#b00026',
    },
  },
  [ButtonVariantEnum.secondary]: {
    color: '#fff',
    backgroundColor: '#00B02D',
    '&:hover': {
      backgroundColor: '#008021',
    },
  },
};

const StyledButton = styled(Button)<ButtonProps & { customVariant: ButtonVariantEnum }>(
  ({ customVariant }) => ({
    ...ButtonStyles[customVariant],
    fontSize: '18px',
    fontWeight: '400',
    textTransform: 'none',
    padding: '8px 16px',
    borderRadius: '10px',
  }),
);

interface CustomButtonProps {
  classname?: string;
  variant: ButtonVariantEnum;
  label: string;
  icon?: React.ReactElement;
  iconPlacement?: string;
  width?: number;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  to?: string; // New prop for navigation
}

export default function CustomButton({
  type,
  classname,
  variant,
  label,
  icon,
  iconPlacement,
  width,
  onClick,
  to,
}: CustomButtonProps): JSX.Element {
  const buttonContent = (
    <StyledButton
      className={classname}
      customVariant={variant}
      onClick={onClick}
      startIcon={iconPlacement === IconPlacementEnum.LEFT ? icon : undefined}
      endIcon={iconPlacement === IconPlacementEnum.RIGHT ? icon : undefined}
      style={{ width: width || 200, height: 44 }}
      type={type}
    >
      {label}
    </StyledButton>
  );

  return (
    <Stack spacing={2} direction="row">
      {to ? (
        <Link to={to} style={{ textDecoration: 'none' }}>
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </Stack>
  );
}
