import { Card, CardMedia, CardContent, Typography, CardActions, Button, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { showAlert } from '../services/alerts';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

export default function Product({ product, showDetails = false }) {
  const navigate = useNavigate();

  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que redirecciona a la pagina del producto seleccionado.   
  */
  const handleClickRedirect = (id) => navigate(`/product/${id}`);
  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que compra un producto seleccionado.
    * @param product Producto seleccionado.    
  */
  const handleClickBuy = (product) => showAlert({ title: 'Compra realizada', text: `El producto ${product.title} ha sido comprado` });

  return (
    <Card
      variant="outlined"
      sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
      <CardMedia
        component="img"
        alt={product.title}
        image={product.image}
        sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${product.price.toFixed(2)} | Raiting: {product.rating.rate}
        </Typography>
        {
          showDetails &&  <Rating readOnly value={product.rating.rate} />
        }
      </CardContent>
      <CardActions>
        {
          !showDetails ?
            <Button size="small" onClick={() => handleClickRedirect(product.id)}>Ver detalles</Button>
            :
            <Button variant='contained' color='secondary' endIcon={<ShoppingCart />} onClick={() => handleClickBuy(product)}>Comprar producto</Button>
        }
      </CardActions>
    </Card>
  )
}