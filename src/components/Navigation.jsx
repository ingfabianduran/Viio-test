import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { userStore } from '../store/store';
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const user = userStore((state) => state.user);
  const logOut = userStore((state) => state.logOut);
  const navigate = useNavigate();
  
  /**
    * @author Fabian Duran
    * @createdate 2023-11-21
    * Metodo para testear el store global para la gestión del usuario.   
  */
  const setSession = () => {
    if (user) {
      logOut();
      navigate('/');  
    }
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Viio
          </Typography>
          <Button color="inherit" onClick={() => navigate('/products')}>Productos</Button>
          <Button color="inherit" onClick={setSession}>
            { user ? 'Logout' : 'Login' }
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}