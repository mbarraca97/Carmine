import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { LockOpen } from '@mui/icons-material';
import { TitleSizes } from '../types/styles';
import { Title, TitleColors } from '../components/Title';
import { JSX } from 'react';
import RegisterForm from '../components/RegisterForm';

// Define the form data type
export interface LoginFormInputs {
  email: string;
  password: string;
}

function RegisterPage(): JSX.Element {

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
          <Title color={TitleColors.BLACK} label={'Criar uma conta'} size={TitleSizes.MEDIUM} />
            <RegisterForm />
        </Box>
      </Box>
    </>
  );
}

export default RegisterPage;
