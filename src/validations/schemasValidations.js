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

export const productRegister = yup.object({
  title: yup.string().required('El campo es requerido'),
  price: yup.number().positive('Valores positivos').required('El campo es requerido'),
  description: yup.string().required('El campo es requerido'),
  image: yup.string().url('URL invalida').required('El campo es requerido'),
  category: yup.string().required('El campo es requerido')
});