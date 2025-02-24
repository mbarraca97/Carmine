import { useAppDispatch } from '../store/store';
import { login } from '../features/auth/authSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import { LockOpen } from '@mui/icons-material';
import { ButtonVariantEnum, IconPlacementEnum, TitleSizes } from '../types/styles';
import { Title, TitleColors } from '../components/Title';
import { Label, LabelColors, LabelSizes } from '../components/Label';
import CustomButton from '../components/Button';
import { JSX } from 'react';

// Define the form data type
export interface LoginFormInputs {
  email: string;
  password: string;
}

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();  // Use the typed dispatch

  // Form validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm<LoginFormInputs>(formOptions);
  const { errors } = formState;

  // Submit handler
  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data));  // Dispatch login with proper type
  };

  const drawerWidth = 600;

  const drawer = (
    <Box sx={{ margin: '4rem', marginTop: '8rem' }}>
      <Title size={TitleSizes.BIG} color={TitleColors.RED} label={'Bem vindo!'} />
      <Typography variant="body1" gutterBottom>
        A Carmine D-Services já conta com mais de 1.400 profissionais do setor automóvel, que usam a
        nossa solução diariamente para a gestão do seu negócio!
      </Typography>
      <List>
        {[
          'Poupe tempo em tarefas administrativas',
          'Tenha as suas Leads sempre em dia',
          'Veja em tempo real a performance dos seus anúncios',
          'Aumente a sua exposição online',
          'Multipublicador de referência em Portugal',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LockOpen />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
        <Box marginLeft={'600px'} sx={{
          width: 1000,
          height: 1000,
          borderRadius: 1,
          padding: '120px'
        }}>
          <Title color={TitleColors.BLACK} label={'Iniciar sessão'} size={TitleSizes.MEDIUM} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box width={380} paddingTop={'2rem'}>
              <Label
                color={LabelColors.BLACK}
                label={'Email ou Nome de Utilizador'}
                size={LabelSizes.SMALL}
              /> 
              <TextField id="outlined-basic"  type="text" fullWidth
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Ex.: alex.henriq@gmail.com" variant="outlined" />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </Box>
            <Box width={380} paddingTop={'2rem'} height={100}>
              <Label color={LabelColors.BLACK} label={'Palavra-Passe'} size={LabelSizes.SMALL} />
              <TextField id="outlined-basic"  fullWidth type="password"
                {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Escreva Aqui"
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </Box>
            <Box paddingBottom={'1rem'}>
              <Label
                label={'Esqueceu-se da palavra-passe?'}
                size={LabelSizes.SMALL}
                color={LabelColors.GREY}
              />
            </Box>
            <CustomButton
              variant={ButtonVariantEnum.primary}
              label={'Entrar na Conta'}
              type="submit"
              classname="btn btn-primary"
              width={380}
              icon={<LockOpen />}
              iconPlacement={IconPlacementEnum.LEFT}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'space-between',
                flexDirection: 'row',
                width: 380,
                justifyContent: 'space-between',
                paddingTop: '2rem',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  m: 1,
                }}
              >
                <Title
                  color={TitleColors.BLACK}
                  size={TitleSizes.SMALL}
                  label={'Ainda não tem uma conta?'}
                />
                <Label
                  color={LabelColors.BLACK}
                  size={LabelSizes.XSMALL}
                  label={'Crie uma rapidamente'}
                />
              </Box>
              <CustomButton
                variant={ButtonVariantEnum.minimal}
                label="Criar Conta"
                to="../register"
              />
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;
