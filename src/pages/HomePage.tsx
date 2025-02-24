import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Box,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Title } from '../components/Title';
import { ButtonVariantEnum, TitleColors, TitleSizes } from '../types/styles';
import CustomButton from '../components/Button';
import { Label, LabelSizes, LabelColors } from '../components/Label';

export interface CompanyFormInputs {
  companyName: string;
  taxNumber: string;
  postalCode: string;
  district: string;
  city: string;
  street: string;
  contactName: string;
  phone: string;
  email: string;
}

export const HomePage: React.FC = () => {
  // Form validation schema
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Nome Fiscal é obrigatório'),
    taxNumber: Yup.string()
      .required('NIPC é obrigatório')
      .matches(/^[0-9]+$/, 'Deve conter apenas números')
      .length(9, 'Deve conter 9 dígitos'),
    postalCode: Yup.string().required('Código Postal é obrigatório'),
    district: Yup.string().required('Distrito é obrigatório'),
    city: Yup.string().required('Localidade é obrigatória'),
    street: Yup.string().required('Rua é obrigatória'),
    contactName: Yup.string().required('Nome do Responsável é obrigatório'),
    phone: Yup.string()
      .required('Telefone é obrigatório')
      .matches(/^\d{9}$/, 'Telefone deve ter 9 dígitos'),
    email: Yup.string()
      .required('Email é obrigatório')
      .email('Email inválido'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<CompanyFormInputs> = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <Box padding={4}>
      <Title size={TitleSizes.BIG} color={TitleColors.BLACK} label="Configuração da Empresa" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} marginTop={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Dados Gerais</Typography>
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Nome Fiscal" />
            <TextField
              fullWidth
              {...register('companyName')}
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="NIPC" />
            <TextField
              fullWidth
              {...register('taxNumber')}
              error={!!errors.taxNumber}
              helperText={errors.taxNumber?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Código Postal" />
            <TextField
              fullWidth
              {...register('postalCode')}
              error={!!errors.postalCode}
              helperText={errors.postalCode?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Distrito" />
            <TextField
              fullWidth
              {...register('district')}
              error={!!errors.district}
              helperText={errors.district?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Localidade" />
            <TextField
              fullWidth
              {...register('city')}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Rua" />
            <TextField
              fullWidth
              {...register('street')}
              error={!!errors.street}
              helperText={errors.street?.message}
            />
          </Grid>

          {/* Dados de Contacto */}
          <Grid item xs={12}>
            <Typography variant="h6">Dados de Contacto</Typography>
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Nome do Responsável" />
            <TextField
              fullWidth
              {...register('contactName')}
              error={!!errors.contactName}
              helperText={errors.contactName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Telefone" />
            <TextField
              fullWidth
              {...register('phone')}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <Label size={LabelSizes.SMALL} color={LabelColors.BLACK} label="Email" />
            <TextField
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="flex-end" gap={2}>
          <CustomButton
            variant={ButtonVariantEnum.minimal}
            label="Cancelar"
            type="button"
            
          />
          <CustomButton
            variant={ButtonVariantEnum.primary}
            label="Guardar Dados"
            type="submit"
          />
        </Box>
      </form>
    </Box>
  );
};
export default HomePage;