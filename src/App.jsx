import { Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Registration from './pages/Registration';
import Products from './pages/Products';
import NotAuthenticated from './pages/NotAuthenticated';
import ProtectedRoute from './components/ProtectedRoute';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { loadingStore } from './store/store';

export default function App() {
  const loading = loadingStore((state) => state.loading);
  return (
    <>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/not-authenticated' element={<NotAuthenticated />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
      <Backdrop
        open={loading}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
