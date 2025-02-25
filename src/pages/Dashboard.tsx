

import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { Box, Breadcrumbs, CssBaseline, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { Title } from '../components/Title';
import { ButtonVariantEnum, TitleColors, TitleSizes } from '../types/styles';
import { Label, LabelColors, LabelSizes } from '../components/Label';
import { AuthState } from '../types/common';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import CustomButton from '../components/Button';


const Dashboard = () => {
  const { signOut } = useAuth();
  const state = useSelector((state: AuthState) => state);
  //Aqui acedemos ao estado todo. A todo o objeto. Se quisermos aceder a um campo específico, podemos fazer state.auth.user.companyName
  const authState = useSelector((state: AuthState) => state.auth);
  function handleClickBreadcrumb(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
const drawerWidth = 240;

  return (
    <> 
    <Box sx={{ zIndex:2 }}>
    <Stack role="presentation" onClick={handleClickBreadcrumb} marginInlineStart={0} marginBlockStart={0}>
          <ResponsiveAppBar />

    <Breadcrumbs aria-label="breadcrumb" sx={{zIndex:2,  backgroundColor:'white', padding: '1rem',}}>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Empresa
      </Link>
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Configurações
      </Link>
      <Typography
        sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
      >
        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Dados Pessoais
      </Typography>
    </Breadcrumbs>
    </Stack>   
    </Box>  
    
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />

    <Drawer
      sx={{
        zIndex: 0,
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Toolbar />

      <Divider />
      <List>
        {['Stock', 'Leads', 'Clientes', 'Estatísticas'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Santander', 'B2B', 'Configurações'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar />
      <Title label='Welcome' size={TitleSizes.BIG} color={TitleColors.RED}/>
      <Box sx={{ padding: '2rem', border: '1px solid #ccc', borderRadius: 5, width: '100%', maxWidth: 600 }}>
        {state?.auth?.user?.companyName ? (<><Label label={`Hello ${state?.auth.user.companyName}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your email is ${authState.user.userEmail}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your phone is ${authState.user.companyPhone}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />    
      <Label label={`Your address is ${authState.user.companyAddress}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your city is ${authState.user.companyCity}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your district is ${authState.user.companyDistrict}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your postal code is ${authState.user.companyPostalCode}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your NIPC is ${authState.user.companyNIPC}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your username is ${authState.user.userName}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your password is ${authState.user.userPassword}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your repeat password is ${authState.user.userRepeatPassword}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your marketing consent is ${authState.user.marketingConsent}`} size={LabelSizes.BIG} color={LabelColors.BLACK} />
      <Label label={`Your terms accepted is ${authState.user.termsAccepted}`} size={LabelSizes.BIG} color={LabelColors.BLACK} /></>) : ('')}
      

      
      <CustomButton onClick={signOut} label="Logout" variant={ButtonVariantEnum.minimal}/>
    </Box>
    </Box>
  </Box>


    </>
  );
};

export default Dashboard;
