import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { userLogged } from '../validations/schemasValidations';
import axios from 'axios';
import { userStore, loadingStore } from '../store/store';
import { showAlert } from '../services/alerts';

export default function FormLogin() {
  const navigate = useNavigate();
  const logIn = userStore((state) => state.logIn);
  const setLoading = loadingStore((state) => state.setLoading);
  /**
    * @author Fabian Duran
    * @createdate 2023-11-22
    * Metodo que redirecciona a la pagina de registro.   
  */
  const redirectToRegister = () => navigate('/registration');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: userLogged,
    /**
      * @author Fabian Duran
      * @createdate 2023-11-22
      * Metodo que valida si el usuario existe o no en el sistema.   
    */
    onSubmit: (values) => {
      setLoading();
      axios.get('src/database/users.json').then(users => {
        const findUser = users.data.users.find(user => user.email === values.email && user.password === values.password);
        setTimeout(() => {
          setLoading();
          if (findUser) {
            logIn(findUser);
            navigate('/products');
          } else {
            showAlert({ title: 'Error', text: 'Usuario o contraseña incorrecta', icon: 'error' });
          }
        }, 1000);
      });
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h5">Iniciar sesión</Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%', marginTop: 20 }}>
          <TextField
            label="Correo electrónico"
            type="text"
            name="email"
            variant="filled"
            margin="normal"
            required
            fullWidth
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email} />
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            variant="filled"
            margin="normal"
            required
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.password}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password} />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
            Iniciar sesión
          </Button>
          <Button variant="text" onClick={redirectToRegister}>No tengo una cuenta</Button>
        </form>
      </Paper>
    </Container>
  );
}