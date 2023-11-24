import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { loadingStore } from '../store/store';
import Product from '../components/Product';
import ListProducts from '../components/ListProducts';
import axios from 'axios';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  const setLoading = loadingStore((state) => state.setLoading);

  useEffect(() => {
    if (id) getDetailsProduct();
  }, [id]);

  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que consulta los detalles de un producto.   
  */
  const getDetailsProduct = () => {
    setLoading();
    axios.get(`https://fakestoreapi.com/products/${id}`).then(resProduct => {
      axios.get(`https://fakestoreapi.com/products/category/${resProduct.data.category}`).then(resProducts => {
        setProduct(resProduct.data);
        setRelatedProducts(resProducts.data);
        setLoading();
      });
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        {product && <Product product={product} showDetails={true} />}
      </Grid>
      <Grid item xs={12} md={8}>
        {relatedProducts.length > 0 && (
          <>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'center', fontWeight: 700, textDecoration: 'underline' }}>PRODUCTOS RELACIONADOS</Typography>
            <ListProducts products={relatedProducts} />
          </>
        )}
      </Grid>
    </Grid>
  )
}
