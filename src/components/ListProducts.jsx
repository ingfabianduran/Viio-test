import { Grid } from '@mui/material';
import Product from './Product';

export default function ListProducts({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}