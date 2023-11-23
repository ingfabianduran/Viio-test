import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotAuthenticated() {
  const navigate = useNavigate();
  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que redirecciona a la pagina principal.   
  */
  const redirectToLogin = () => navigate('/');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Usuario no autenticado</Typography>
      <Button variant="text" onClick={redirectToLogin}>Iniciar sesión</Button>
    </Box>
  )
}