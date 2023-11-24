import { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem, Button, Typography } from '@mui/material';
import { loadingStore } from '../store/store';
import { showAlert, showConfirmAlert } from '../services/alerts';
import ListProducts from '../components/ListProducts';
import axios from 'axios';
import FormProduct from '../components/FormProduct';

export default function Products() {
  const [searchProduct, setSearchProduct] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const setLoading = loadingStore((state) => state.setLoading);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    if (searchProduct !== '') getProducts();
  }, [searchProduct]);

  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que consulta las categorias de la API.   
  */
  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories').then(res => {
      setCategories(res.data);
    });
  };
  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que consulta los productos a la API.   
  */
  const getProducts = () => {
    const url = searchProduct !== '' ? `https://fakestoreapi.com/products/category/${searchProduct}` : 'https://fakestoreapi.com/products';
    setLoading();
    axios.get(url).then(res => {
      setProducts(res.data);
      setLoading();
    });
  };
  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que consulta los productos a la API a traves de un filtro.
    * @param event Evento emitido por el select.    
  */
  const handleChangeSearchProduct = (event) => setSearchProduct(event.target.value);
  /**
    * @author Fabian Duran
    * @createdate 2023-11-24
    * Metodo que muestra la modal en la vista.
  */
  const onOpenDialog = () => setShowDialog(true);
  /**
    * @author Fabian Duran
    * @createdate 2023-11-24
    * Metodo que oculta la modal en la vista.
  */
  const onCloseDialog = () => setShowDialog(false);
  /**
    * @author Fabian Duran
    * @createdate 2023-11-24
    * Metodo que guarda un producto en el sistema.
    * @param values Valores del formulario. 
  */
  const onSubmitRegisterProduct = (values) => {
    showConfirmAlert({ text: '¿De registrar el producto en el sistema?' }).then(confirm => {
      if (confirm.isConfirmed) {
        setLoading();
        axios.post('https://fakestoreapi.com/products', JSON.stringify(values)).then(res => {
          setLoading();
          onCloseDialog();
          showAlert({ title: 'Producto registrado', text: `El producto ha sido registrado con exito` });
          getProducts();
        });
      }
    });
  };

  return (
    <>
      {
        products.length > 0 && (
          <Grid container justifyContent="flex-end" alignItems="center" spacing={2} marginBottom={2}>
            <Grid item xs={12} md={4}>
              <TextField
                select
                label="Categorias"
                variant="filled"
                fullWidth
                value={searchProduct}
                onChange={handleChangeSearchProduct}>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button type="button" variant="contained" color="primary" fullWidth onClick={onOpenDialog} sx={{ height: '55px' }}>Crear producto</Button>
            </Grid>
            { showDialog && <FormProduct show={showDialog} categories={categories} onSubmit={onSubmitRegisterProduct} onClose={onCloseDialog} /> }
          </Grid>
        )
      }
      <Grid container>
        <Grid item md={12}>
          {
            products.length > 0
              ?
              <ListProducts products={products} />
              :
              <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }}>No existen productos registrados</Typography>
          }
        </Grid>
      </Grid>
    </>
  )
}