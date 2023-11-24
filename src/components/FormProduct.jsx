import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { productRegister } from '../validations/schemasValidations';

export default function FormProduct({ show, categories, onSubmit, onClose }) {
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      description: '',
      image: '',
      category: ''
    },
    validationSchema: productRegister,
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <Dialog open={show} onClose={onClose} maxWidth="sm" fullWidth>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <DialogTitle fontWeight={700}>FORMULARIO PRODUCTO</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Título"
            name="title"
            variant="filled"
            margin="normal"
            value={formik.values.title}
            onChange={formik.handleChange}
            helperText={formik.touched.title && formik.errors.title}
            error={formik.touched.title && Boolean(formik.errors.title)} />
          <TextField
            fullWidth
            type="number"
            label="Precio"
            name="price"
            variant="filled"
            margin="normal"
            value={formik.values.price}
            onChange={formik.handleChange}
            helperText={formik.touched.price && formik.errors.price}
            error={formik.touched.price && Boolean(formik.errors.price)} />
          <TextField
            fullWidth
            label="Descripción"
            name="description"
            variant="filled"
            margin="normal"
            value={formik.values.description}
            onChange={formik.handleChange}
            helperText={formik.touched.description && formik.errors.description}
            error={formik.touched.description && Boolean(formik.errors.description)} />
          <TextField
            fullWidth
            label="Imagen"
            name="image"
            variant="filled"
            margin="normal"
            value={formik.values.image}
            onChange={formik.handleChange}
            helperText={formik.touched.image && formik.errors.image}
            error={formik.touched.image && Boolean(formik.errors.image)} />
          <TextField
            select
            label="Categorias"
            name="category"
            variant="filled"
            fullWidth
            margin="normal"
            value={formik.values.category}
            onChange={formik.handleChange}
            helperText={formik.touched.category && formik.errors.category}
            error={formik.touched.category && Boolean(formik.errors.category)}>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}