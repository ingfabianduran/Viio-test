import { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem, Button, Typography } from '@mui/material';
import ListProducts from '../components/ListProducts';
import axios from 'axios';
import { loadingStore } from '../store/store';

export default function Products() {
  const [searchProduct, setSearchProduct] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const setLoading = loadingStore((state) => state.setLoading);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
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
    setLoading();
    const url = searchProduct !== '' ? `https://fakestoreapi.com/products/category/${searchProduct}` : 'https://fakestoreapi.com/products';
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

  return (
    <>
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
          <Button type="button" variant="contained" color="primary" fullWidth sx={{ height: '55px' }}>Crear producto</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          {
            products.length > 0 
              ? 
                <ListProducts products={products} />
              : 
                <Typography variant='h4' gutterBottom>No existen productos registrados</Typography>
          }
        </Grid>
      </Grid>
    </>
  )
}