import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Product({ product, showButtonDetails = true }) {
  const navigate = useNavigate();

  /**
    * @author Fabian Duran
    * @createdate 2023-11-23
    * Metodo que redirecciona a la pagina del producto seleccionado.   
  */
  const handleClick = (id) => navigate(`/product/${id}`);

  return (
    <Card
      variant='outlined'
      sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={product.title}
        image={product.image}
        sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${product.price.toFixed(2)} | Raiting: {product.rating.rate}
        </Typography>
      </CardContent>
      {
        showButtonDetails && (<CardActions>
          <Button size="small" onClick={() => handleClick(product.id)}>Ver detalles</Button>
        </CardActions>)
      }
    </Card>
  )
}