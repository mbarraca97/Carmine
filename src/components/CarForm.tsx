import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCar } from '../features/carSlice';
import { AppDispatch } from '../store/store';
import { Box, TextField, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { ButtonVariantEnum } from '../types/styles';
import CustomButton from './Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface CarFormData {
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: string;
  transmission: string;
  mileage: number;
}

const validationSchema = Yup.object().shape({
  brand: Yup.string().required('Marca é obrigatória'),
  model: Yup.string().required('Modelo é obrigatório'),
  year: Yup.number().required('Ano é obrigatório').min(1900, 'Ano inválido'),
  price: Yup.number().required('Preço é obrigatório').min(0, 'Preço inválido'),
  fuelType: Yup.string().required('Tipo de combustível é obrigatório'),
  transmission: Yup.string().required('Transmissão é obrigatória'),
  mileage: Yup.number().required('Quilometragem é obrigatória').min(0, 'Quilometragem inválida'),
});

const CarForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors } } = useForm<CarFormData>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: CarFormData) => {
    dispatch(addCar({ ...data, year: data.year.toString(), mileage: data.mileage.toString(), price: data.price.toString(), id: '', location: '', type: '', status: '', photos: [] }));
  };

  return (
    <Box sx={{ padding: '2rem', border: '1px solid #ccc', borderRadius: 5, width: '100%', maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>Adicionar Carro</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Marca" fullWidth {...register('brand')} error={!!errors.brand} helperText={errors.brand?.message} sx={{ marginBottom: '1rem' }} />
        <TextField label="Modelo" fullWidth {...register('model')} error={!!errors.model} helperText={errors.model?.message} sx={{ marginBottom: '1rem' }} />
        <TextField label="Ano" type="number" fullWidth {...register('year')} error={!!errors.year} helperText={errors.year?.message} sx={{ marginBottom: '1rem' }} />
        <TextField label="Preço" type="number" fullWidth {...register('price')} error={!!errors.price} helperText={errors.price?.message} sx={{ marginBottom: '1rem' }} />

        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          <InputLabel id="fuelType-label">Tipo de Combustível</InputLabel>
          <Select labelId="fuelType-label" {...register('fuelType')} error={!!errors.fuelType}>
            <MenuItem value="Gasoline">Gasolina</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Electric">Elétrico</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
          <InputLabel id="transmission-label">Transmissão</InputLabel>
          <Select labelId="transmission-label" {...register('transmission')} error={!!errors.transmission}>
            <MenuItem value="Manual">Manual</MenuItem>
            <MenuItem value="Automatic">Automático</MenuItem>
          </Select>
        </FormControl>

        <TextField label="Quilometragem" type="number" fullWidth {...register('mileage')} error={!!errors.mileage} helperText={errors.mileage?.message} sx={{ marginBottom: '1rem' }} />
        
        <CustomButton variant={ButtonVariantEnum.primary} label="Adicionar Carro" type="submit" />
      </form>
    </Box>
  );
};

export default CarForm;
