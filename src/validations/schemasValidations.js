import * as yup from 'yup';

export const userLogged = yup.object({
  email: yup.string().required('El campo es requerido').email('Correo invalido'),
  password: yup.string().required('El campo es requerido'),
});

export const userRegister = yup.object({
  firstName: yup.string().required('El campo es requerido'),
  lastName: yup.string().required('El campo es requerido'),
  email: yup.string().required('El campo es requerido'),
  password: yup.string().required('El campo es requerido'),
});