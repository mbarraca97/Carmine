import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerUser } from '../features/auth/authSlice';
import { AppDispatch } from '../store/store';
import { Box, TextField, Typography, Checkbox, FormControlLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { ButtonVariantEnum } from '../types/styles';
import CustomButton from './Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { AuthState } from '../types/common';

interface FormData {
  companyName: string;
  companyNIPC: string;
  companyPhone: string;
  companyPostalCode: string;
  companyDistrict: string;
  companyCity: string;
  companyAddress: string;
  userName: string;
  userEmail: string;
  userPassword: string;
  userRepeatPassword: string; 
  termsAccepted?: boolean;
  marketingConsent?: boolean;
}

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector((state: AuthState) => state.auth.error);
  const [passwordRequirements, setPasswordRequirements] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Nome da Empresa é obrigatório'),
    companyNIPC: Yup.string().required('NIPC é obrigatório'),
    companyPhone: Yup.string().required('Telemóvel é obrigatório'),
    companyPostalCode: Yup.string().required('Código Postal é obrigatório'),
    companyDistrict: Yup.string().required('Distrito é obrigatório'),
    companyCity: Yup.string().required('Concelho é obrigatório'),
    companyAddress: Yup.string().required('Rua é obrigatório'),
    userName: Yup.string().required('Nome é obrigatório'),
    userEmail: Yup.string().required('Email é obrigatório').email('Email inválido'),
    userPassword: Yup.string().required('Palavra-Passe é obrigatória').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Palavra-Passe deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo'),
    userRepeatPassword: Yup.string().required('Repetir Palavra-Passe é obrigatório').oneOf([Yup.ref('userPassword')], 'Palavra-Passe não coincide'),
    termsAccepted: Yup.boolean().oneOf([true], 'Deve aceitar os Termos e Condições').optional(),
    marketingConsent: Yup.boolean().optional()
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    dispatch(registerUser(data));
  };

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({ resolver: yupResolver(validationSchema) });

  const password = watch('userPassword');

  useEffect(() => {
    setPasswordRequirements({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      numbers: /[0-9]/.test(password),
      symbols: /[@$!%*?&]/.test(password),
    });
  }, [password]);

  return (
    <Box sx={{ padding: '2rem', border: '1px solid #ccc', borderRadius: 5, width: '100%', maxWidth: 600 }}>

      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <Box sx={{ color: 'red', marginBottom: '1rem' }}>
            <Typography variant="body2">{error}</Typography>
          </Box>
        )}

        {/* Company Data */}
        <Box sx={{ marginBottom: '2rem',  }}>
          <Typography variant="h6">Dados da Empresa</Typography>
          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <TextField label="Nome Fiscal" {...register('companyName')} error={!!errors.companyName} helperText={errors.companyName?.message} />
            <TextField label="Nome Comercial" {...register('companyNIPC')} error={!!errors.companyNIPC} helperText={errors.companyNIPC?.message} />
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <TextField label="NIPC" {...register('companyPhone')} error={!!errors.companyPhone} helperText={errors.companyNIPC?.message} />
            <TextField label="Telemóvel" {...register('companyPostalCode')} error={!!errors.companyPostalCode} helperText={errors.companyPhone?.message} />
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <FormControl fullWidth>
              <InputLabel id="district-label">Distrito</InputLabel>
              <Select labelId="district-label" label="Distrito" {...register('companyDistrict')} error={!!errors.companyDistrict}>
              <MenuItem value="Aveiro">Aveiro</MenuItem>
              <MenuItem value="Beja">Beja</MenuItem>
              <MenuItem value="Braga">Braga</MenuItem>
              <MenuItem value="Bragança">Bragança</MenuItem>
              <MenuItem value="Castelo Branco">Castelo Branco</MenuItem>
              <MenuItem value="Coimbra">Coimbra</MenuItem>
              <MenuItem value="Évora">Évora</MenuItem>
              <MenuItem value="Faro">Faro</MenuItem>
              <MenuItem value="Guarda">Guarda</MenuItem>
              <MenuItem value="Leiria">Leiria</MenuItem>
              <MenuItem value="Lisboa">Lisboa</MenuItem>
              <MenuItem value="Portalegre">Portalegre</MenuItem>
              <MenuItem value="Porto">Porto</MenuItem>
              <MenuItem value="Santarém">Santarém</MenuItem>
              <MenuItem value="Setúbal">Setúbal</MenuItem>
              <MenuItem value="Viana do Castelo">Viana do Castelo</MenuItem>
              <MenuItem value="Vila Real">Vila Real</MenuItem>
              <MenuItem value="Viseu">Viseu</MenuItem>
              <MenuItem value="Açores">Açores</MenuItem>
              <MenuItem value="Madeira">Madeira</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="city-label">Concelho</InputLabel>
              <Select labelId="city-label" label="Concelho" {...register('companyCity')} error={!!errors.companyCity}>
                <MenuItem value="Lacanelade">Lacanelade</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField label="Rua" fullWidth {...register('companyAddress')} error={!!errors.companyAddress} helperText={errors.companyAddress?.message} />
        </Box>

        {/* User Data */}
        <Box sx={{ marginBottom: '2rem' }}>
          <Typography variant="h6">Dados de Utilizador</Typography>
          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <TextField label="Nome" {...register('userName')} error={!!errors.userName} helperText={errors.userName?.message} />
            <TextField label="Email" {...register('userEmail')} error={!!errors.userEmail} helperText={errors.userEmail?.message} />
          </Box>
          <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <TextField label="Palavra-Passe" type="password" {...register('userPassword')} error={!!errors.userPassword} helperText={errors.userPassword?.message} />
            <TextField label="Repetir Palavra-Passe" type="password" {...register('userRepeatPassword')} error={!!errors.userRepeatPassword} helperText={errors.userRepeatPassword?.message} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <Typography variant="body2">A Palavra-Passe deve ter:</Typography>
            <Typography variant="body2" sx={{ color: passwordRequirements.uppercase ? 'green' : 'inherit' }}>Maiúsculas</Typography>
            <Typography variant="body2" sx={{ color: passwordRequirements.lowercase ? 'green' : 'inherit' }}>Minúsculas</Typography>
            <Typography variant="body2" sx={{ color: passwordRequirements.numbers ? 'green' : 'inherit' }}>Números</Typography>
            <Typography variant="body2" sx={{ color: passwordRequirements.symbols ? 'green' : 'inherit' }}>Símbolos (#%@$!*?&)</Typography>
          </Box>
        </Box>

        {/* Terms and Conditions */}
        <FormControlLabel control={<Checkbox {...register('termsAccepted')}  />} label="Li e aceito os Termos e Condições e Política de Privacidade." />
        <FormControlLabel control={<Checkbox {...register('marketingConsent')} />} label="Consinto que a Santander Consumer Services me envie comunicações de marketing relativas a produtos e serviços associados à marca Carmine." />

        <CustomButton variant={ButtonVariantEnum.primary} label="Concluir Registo" type="submit"  />
        <CustomButton variant={ButtonVariantEnum.minimal}label="Já tenho conta"  to="../login"/>
      </form>
    </Box>
  );
};

export default RegisterForm;