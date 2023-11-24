import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { userRegister } from '../validations/schemasValidations';
import { userStore, loadingStore } from '../store/store';

export default function FormRegister() {
  const navigate = useNavigate();
  const logIn = userStore((state) => state.logIn);
  const setLoading = loadingStore((state) => state.setLoading);
  /**
    * @author Fabian Duran
    * @createdate 2023-11-22
    * Metodo que redirecciona a la pagina principal.   
  */
  const redirectToLogin = () => navigate('/');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: userRegister,
    /**
      * @author Fabian Duran
      * @createdate 2023-11-22
      * Metodo que registra un nuevo usuario en el sistema.   
    */ 
    onSubmit: (values) => {
      setLoading();
      setTimeout(() => {
        setLoading();
        logIn(values);
        navigate('/products');
      }, 1000);
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>REGISTRARSE</Typography>
        <form autoComplete="off" onSubmit={formik.handleSubmit} style={{ width: '100%', marginTop: 20 }}>
          <TextField
            label="Nombre"
            type="text"
            name="firstName"
            variant="filled"
            margin="normal"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          />
          <TextField
            label="Apellido"
            type="text"
            name="lastName"
            variant="filled"
            margin="normal"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          />
          <TextField
            label="Correo electrónico"
            type="text"
            name="email"
            variant="filled"
            margin="normal"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            variant="filled"
            margin="normal"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
            Registrarse
          </Button>
          <Button variant="text" onClick={redirectToLogin}>Ya tengo una cuenta</Button>
        </form>
      </Paper>
    </Container>
  )
}